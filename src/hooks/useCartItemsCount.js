import { useSelector } from 'react-redux'

const useCardItemCount = ({ card }) => {
    return card.length
}