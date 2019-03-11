define(['react', 'react-bootstrap', 'board'], function(React, ReactBootstrap, Board) {
    const h = React.createElement;
    const { Container, Row } = ReactBootstrap;

    class Game extends React.Component {
        render() {
            return (
                h(Container, {}, [
                    h(Row, {}, [
                        h('div', {className:'game'}, [
                            h('div', {className:'game-board'}, [
                                h(Board, {}, null)
                            ])
                        ])
                    ]),
                    h(Row, {}, [
                        h('div', {className:'game-info'}, [
                            h('div', {}, null),
                            h('ol', {}, null)
                        ])
                    ])
                ])
            );
        }
    };

    return Game;
})
