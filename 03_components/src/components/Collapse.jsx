import React from "react"

import "./Collapse.css"

function Collapse() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<p>
						<a
							href="#ItemCollapse1"
							className="btn btn-primary"
							data-toggle="collapse"
						>
							Disparador Href
						</a>
						<button
							className="btn btn-primary"
							data-toggle="collapse"
							type="button"
							data-target="#ItemCollapse1"
						>
							Disparador Button
						</button>
					</p>
					<div className="collapse" id="ItemCollapse1">
						<div className="card card-body">
							What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
							printing and typesetting industry Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book it has?
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<p>
						<a
							href="#ItemCollapse-1"
							className="btn btn-primary"
							data-toggle="collapse"
						>
							Disparador Href - Item 1
						</a>
						<button
							className="btn btn-primary"
							data-toggle="collapse"
							type="button"
							data-target="#ItemCollapse-2"
						>
							Disparador Button - Item 2
						</button>
					</p>
					<div className="collapse" id="ItemCollapse-1">
						<div className="card card-body">
							<h4>Item 1</h4>
							What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
							printing and typesetting industry Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book it has?
						</div>
					</div>
					<div className="collapse" id="ItemCollapse-2">
						<div className="card card-body">
							<h4>Item 2</h4>
							What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
							printing and typesetting industry Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book it has?
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Collapse
