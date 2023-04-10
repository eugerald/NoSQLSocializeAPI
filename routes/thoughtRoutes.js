const { requiredPaths } = require('../models/REactions');

const router=require('express').Route();
const {getThoughts, getSingleThought, createThought, updateThought, deleteThoughts, addReaction, removeReaction}=require('../../controllers/thought-controller');
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getsingleThought).post(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/: reactionId').delete(removeReaction);
module.exports = router;

