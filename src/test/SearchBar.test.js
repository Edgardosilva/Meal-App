import { render, screen} from "@testing-library/react"
import SearchBar from '../components/SearchBar'
import React from "react"

describe('SearchBar', () => {
    test ('se encuentra el article en el documento', () => {
        render(<SearchBar />)
        const article = screen.getByRole('article', {name: 'main-article'})
        expect(article).toBeInTheDocument()
    })
})