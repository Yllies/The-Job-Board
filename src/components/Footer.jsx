const Footer = (props) => {
  return (
    <div className="footer">
      <p>
        Made with <span>{props.library}</span> at <span>{props.bootcamp}</span>{" "}
        By <span>{props.name}</span>
      </p>
    </div>
  );
};

export default Footer;
