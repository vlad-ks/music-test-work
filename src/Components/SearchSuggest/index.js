import React, {useEffect, useState} from "react";
import {useCombobox} from "downshift";
import cn from "classnames";
import {uid} from "react-uid";
import regexifyString from "regexify-string";
import {useHistory} from "react-router-dom";
import {getArtistRoute} from "utils/routing";
import Icon from "Components/Icon";

import s from "./index.module.scss";


const SearchSuggest = ({
						   items,
						   term,
						   onChange
					   }) => {
	const history = useHistory();
	const [value, setValue] = useState('');

	const {
		isOpen,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
		openMenu
	} = useCombobox({
		items,
		onSelectedItemChange: ({selectedItem}) => {
			history.push(getArtistRoute(selectedItem.id));
			// setValue(selectedItem.name); //@todo
		}
	});

	function changeHandler(e) {
		const val = e.target.value;

		if (onChange) onChange(val);
		setValue(val);
	}

	function focusHandler() {
		if (!isOpen) openMenu();
	}

	return (
		<div className={s.wrap}>
			<div
				{...getComboboxProps({
					className: s.search
				})}
			>
				<input
					{...getInputProps({
						className: s.searchInput,
						placeholder: 'Search for songs, artists etc ...',
						value,
						onChange: changeHandler,
						onFocus: focusHandler,
					})}
				/>
				<Icon name="search"/>
			</div>

			<div
				{...getMenuProps({
					className: s.resultBox
				})}
			>
				{(isOpen && !!items.length) && (
					<ul className={s.list}>
						{items.map((item, index) => {
							const pattern = new RegExp(term, 'gi');

							return (
								<li
									key={uid(item)}
									className={cn(s.item,
										{[s.itemHl]: highlightedIndex === index}
									)}
									{...getItemProps({item, index})}
								>

									<div className={s.img}>
										<img src={item.picture_small} alt={item.name} />
									</div>

									{regexifyString({
										pattern,
										decorator: (match, index) => {
											return (
												<span key={uid(index)}>{match}</span>
											);
										},
										input: item.name,
									})}
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</div>
	)
}

export default SearchSuggest;