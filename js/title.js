define(['react', 'react-bootstrap'], function(React, ReactBootstrap) {
    const h = React.createElement;
    const { Jumbotron, Container, Button, Row } = ReactBootstrap;

    class Title extends React.Component {
        render() {
            return (
                h(Jumbotron, {}, [
                    h(Container, {}, [
                        h(Row, {}, [h('h1', {}, "React / React-Bootstrap")]),
                        h(Row, {}, [
                            h('p', {}, [
                                h('span', {}, "React "),
                                h('a', {href:'https://reactjs.org/tutorial/tutorial.html'}, "tutorial"),
                                h('span', {}, ", rendered using React-Bootstrap")
                            ])
                        ])
                    ])
                ])
            );
        }
    };

    return Title;
});
