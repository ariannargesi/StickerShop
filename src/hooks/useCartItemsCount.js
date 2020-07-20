import { useSelector } from 'react-redux'

const useCardItemCount = () => {
    const count = useSelector(state => state.card.length)
    return count
}

export default useCardItemCount