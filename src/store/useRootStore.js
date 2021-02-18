import { useContext } from 'react'
import { RootContext } from '../Containers/App/Provider'

    
export default function useRootStore() {
    return useContext(RootContext);
}
