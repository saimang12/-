import { useRef } from "react"

const Search = ({ input, setInput, setSearch }) => {
    const text = useRef(null);

    const SearchHandler = (e) => {
        e.preventDefault();
        if (input.length < 2) {
            alert('검색어는 2글자 이상 입력해주세요')
            text.current.focus();
            setInput('')
            return
        } else {
            setSearch(input)
        }


    }
    return (
        <div className="search_box">
            <form onSubmit={SearchHandler}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} ref={text} />
                <button><i className="xi-search"></i></button>
            </form>

        </div>
    )
}

export default Search