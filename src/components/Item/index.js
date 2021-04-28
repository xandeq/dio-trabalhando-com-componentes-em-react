const Item = (props) => {
  return (
    <li class="list-group-item">
      <a href="#" className="list-group-item list-group-item-action">
        {props.children}
      </a>
    </li>
  );
};

export default Item;