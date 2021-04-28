const Item = ({ children }) => {
  return (
    <li class="list-group-item">
      <a href="#" className={children.className}>
        {children} {children.value}
      </a>
    </li>
  );
};

export default Item;