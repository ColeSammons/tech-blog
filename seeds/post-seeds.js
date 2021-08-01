const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mattis quam. Ut fringilla, massa pharetra sagittis tincidunt, arcu quam sagittis eros, laoreet sollicitudin justo dolor in neque. Phasellus ornare non felis vel tincidunt. Nam sed sem egestas, accumsan quam id, egestas velit. Pellentesque ultrices arcu dui, eu consectetur quam pellentesque et.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'Fusce justo ante, gravida at metus nec, varius viverra elit. Integer dapibus dolor vel tempor placerat. Nunc nec urna at mauris finibus ornare. ',
        user_id: 2
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        content: 'Curabitur vulputate, justo in hendrerit laoreet, ex mauris tempus ante, non malesuada nisi enim in odio. In interdum, ligula eget fermentum ultricies,',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
