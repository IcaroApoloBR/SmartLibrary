import React, { useContext } from 'react'
import _ from 'lodash'

import Menu from '../src/Components/Menu'
import SearchBar from '../src/Components/SeachBar'
import ContainerCategoria from '../src/Components/ContainerCategoria'
import Categoria from '../src/Components/CarouselCategoria'
import Avaliacoes from '../src/Components/CarouselAvaliacoes'
import Social from '../src/Components/Social'
import Footer from '../src/Components/Footer'

import { ConfigContext } from './App'

const Index = () => {
	const context = useContext(ConfigContext)
	const query = _.get(context, 'query')
	const category = _.get(query, 'category')
	const title = _.get(query, 'title')

	return (
		<div>
			<Menu />
			<SearchBar />
			{!!category | !!title ? (
				<Categoria text={category ? category : 'Filtrando livros para: ' + title} query={query} />
			) : (
				<div>
					<ContainerCategoria />
					<Avaliacoes />
				</div>
			)}
			<Social />
			<Footer />
		</div>
	)
}

export default Index
