import './style.css'

export const Input = ({ handleChange, searchValue }) => (
    <input type='search'
        onChange={handleChange}
        value={searchValue}
        className='search'
        placeholder='type your search'
    />
)