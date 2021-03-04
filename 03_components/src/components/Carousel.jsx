import React from "react"

import "./Carousel.css"

import planetas1 from "./img/planetas1.jpg"
import planetas2 from "./img/planetas2.jpg"
import planetas3 from "./img/planetas3.jpg"
import planetas4 from "./img/planetas4.jpg"
import planetas5 from "./img/planetas5.jpg"
import planetas6 from "./img/planetas6.jpg"
import planetas7 from "./img/planetas7.jpg"
import planetas8 from "./img/planetas8.jpg"
import planetas9 from "./img/planetas9.jpg"

function Carousel(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div
						id="controlCarousel"
						className="carousel slide"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#controlCarousel"
								data-slide-to="0"
								className="active"
							></li>
							<li data-target="#controlCarousel" data-slide-to="1"></li>
							<li data-target="#controlCarousel" data-slide-to="2"></li>
							<li data-target="#controlCarousel" data-slide-to="3"></li>
							<li data-target="#controlCarousel" data-slide-to="4"></li>
							<li data-target="#controlCarousel" data-slide-to="5"></li>
							<li data-target="#controlCarousel" data-slide-to="6"></li>
							<li data-target="#controlCarousel" data-slide-to="7"></li>
							<li data-target="#controlCarousel" data-slide-to="8"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="d-block w-100" src={planetas1} />
								<div className="carousel-caption d-none d-md-block">
									<h3>Planeta Mercúrio</h3>
									<p>
										Esse é o primeiro planeta do sistema solar, deve ser bem
										quente :O
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas2} />
								<div className="carousel-caption d-none d-md-block">
									<h5>Planeta Venús</h5>
									<p>Esse é o segundo planeta do sistema solar</p>
								</div>
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas3} />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas4} />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas5} />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas6} />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas7} />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas8} />
							</div>
							<div className="carousel-item">
								<img className="d-block w-100" src={planetas9} />
							</div>
							<a
								href="#controlCarousel"
								className="carousel-control-prev"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="sr-only"></span>
							</a>
							<a
								href="#controlCarousel"
								className="carousel-control-next"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="sr-only"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Carousel
