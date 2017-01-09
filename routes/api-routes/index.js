const router = require("express").Router();
const path = require("path")
const PostModel = require(path.join(__dirname, '../../models/post-model'))
const TagModel = require(path.join(__dirname, '../../models/tag-model'))

router.route('/findPostsWithAny/:tags')
.get((req, res) => {
  let tagArray = req.params.tags.split('+')
  PostModel.findAll({
    include: [ {
        model: TagModel,
        where: {
          title: {
            $or: tagArray
          }
        }
    } ]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})


router.route('/findPostsWithOnly/:tags')
.get((req, res) => {
  let tagArray = req.params.tags.split('+')
  PostModel.findAll({
    include: [ {
        model: TagModel,
        where: {
          title: {
            $or: ['cheap', 'cars']
          }
        }
    } ]
  })
  .then((data) => {
    let newData = []
    data.forEach((ele) => {
      if (ele.tags.length === tagArray.length) {
        newData.push(ele)
      }
  })
    res.send(newData)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

router.route('/findCategory/:category')
.get((req, res) => {
  PostModel.findAll({
    include: [TagModel],
    where: {category: req.params.category}
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})

module.exports = router
