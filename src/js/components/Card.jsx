

const Card = ({ title, text, image }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
);

export default Card;
