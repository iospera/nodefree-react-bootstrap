define(['react', 'react-bootstrap'], function(React, ReactBootstrap) {
    const h = React.createElement;
    const { Button } = ReactBootstrap;

    function Square(props) {
        return (h(Button, {className:'square', onClick: props.onClick}, props.value));
    };

    return Square;
});
