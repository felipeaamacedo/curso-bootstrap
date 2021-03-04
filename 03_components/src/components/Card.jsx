import React from "react"

import "./Card.css"

import cardImage1 from "./img/moon.jpg"

function Card(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-body">Esse é o corpo do meu card!</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card" style={{ width: "20rem" }}>
						<div className="card-body">
							<h4 className="card-title">Título do Cartão</h4>
							<h6 className="card-subtitle text-muted">Subtítulo do cartão</h6>
							<p className="card-text">
								Testo que vai entrar no cartão e vamos continuar falando pelo
								cartão aque estamos usando aqui no bootstrap!
							</p>
							<a href="#" className="card-link">
								Link do Cartão
							</a>
							<a href="#" className="card-link">
								Outro Link
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card" style={{ width: "20rem" }}>
						<img src={cardImage1} className="card-img-top" />
						<div className="card-body">
							<h4 className="card-title">Título do Cartão</h4>
							<h6 className="card-subtitle text-muted">Subtítulo do cartão</h6>
							<p className="card-text">
								Testo que vai entrar no cartão e vamos continuar falando pelo
								cartão aque estamos usando aqui no bootstrap!
							</p>
							<a href="#" className="card-link">
								Link do Cartão
							</a>
							<a href="#" className="card-link">
								Outro Link
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card" style={{ width: "20rem" }}>
						<ul className="list-group" list-group-flush>
							<li className="list-group-item">Item da Lista 1</li>
							<li className="list-group-item">Item da Lista 2</li>
							<li className="list-group-item">Item da Lista 3</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card" style={{ width: "20rem" }}>
						<img src={cardImage1} className="card-img-top" />
						<div className="card-body">
							<h4 className="card-title">Título do Cartão</h4>
							<h6 className="card-subtitle text-muted">Subtítulo do cartão</h6>
							<p className="card-text">
								Testo que vai entrar no cartão e vamos continuar falando pelo
								cartão aque estamos usando aqui no bootstrap!
							</p>
						</div>
						<div className="card-body">
							<ul className="list-group" list-group-flush>
								<li className="list-group-item">Item da Lista 1</li>
								<li className="list-group-item">Item da Lista 2</li>
								<li className="list-group-item">Item da Lista 3</li>
							</ul>

							<a href="#" className="card-link">
								Link do Cartão
							</a>
							<a href="#" className="card-link">
								Outro Link
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="card">
						<div className="card-header">Destaque</div>
						<div className="card-body">
							<h4 className="card-title">Título do Cartão</h4>
							<h6 className="card-subtitle text-muted">Subtítulo do cartão</h6>
							<a href="#" className="btn btn-primary">
								Ir para algum Lugar
							</a>
							<p className="card-text">
								Testo que vai entrar no cartão e vamos continuar falando pelo
								cartão aque estamos usando aqui no bootstrap!
							</p>
						</div>
						<img src={cardImage1} className="card-img-top" />
						<div className="card-footer text-muted">Há 2 dias</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="card">
						<div className="card-header">Destaque</div>
						<div className="card-body">
							<h4 className="card-title">Título do Cartão</h4>
							<h6 className="card-subtitle text-muted">Subtítulo do cartão</h6>
							<a href="#" className="btn btn-primary">
								Ir para algum Lugar
							</a>
							<p className="card-text">
								Testo que vai entrar no cartão e vamos continuar falando pelo
								cartão aque estamos usando aqui no bootstrap!
							</p>
						</div>
						<img src={cardImage1} className="card-img-top" />
						<div className="card-footer text-muted">Há 2 dias</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card bg-dark text-white">
						<img src={cardImage1} className="card-img" />
						<div className="card-img-overlay">
							<h4 className="card-title">Título do Cartão</h4>
							<p class="card-text">Conteúdo auxiliar do meu cartão</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
