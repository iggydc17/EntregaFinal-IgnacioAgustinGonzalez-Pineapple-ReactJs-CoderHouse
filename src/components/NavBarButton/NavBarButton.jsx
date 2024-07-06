import './NavBarButton.css';

const NavBarButton = ({ category }) => {
    return (
        <a href="#">
            {category.category}
        </a>
    );
}

export default NavBarButton;
