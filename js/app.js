require(['react', 'react-dom', 'react-bootstrap',
         'title',
         'game'
        ],
        function(React, ReactDOM, ReactBootstrap,
                 Title,
                 Game
                ) {
    const h = React.createElement;
    const render = ReactDOM.render;
    const { Container } = ReactBootstrap;

    render(
        h('div', {}, [
            h(Title, {}, null),
            h(Container, {}, [
                h(Game, {}, null)
            ])
        ]),
        document.getElementById('root')
    );
});
