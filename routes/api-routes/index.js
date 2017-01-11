const router = require("express").Router();
const path = require("path")
const PostModel = require(path.join(__dirname, '../../models/post-model'))
const TagModel = require(path.join(__dirname, '../../models/tag-model'))

router.route('/findPostsWithAny/:tags/:category')
.get((req, res) => {
  let tagArray = req.params.tags.split('+')
  PostModel.findAll({
    where: {category: req.params.category},
    include: [{
        model: TagModel,
        where: {
          title: {
            $or: tagArray
          }
        }
    }]
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
    res.sendStatus(500)
  })
})


router.route('/findPostsWithOnly/:tags/:category')
.get((req, res) => {
  let tagArray = req.params.tags.split('+')
  PostModel.findAll({
    where: {category: req.params.category},
    include: [{
        model: TagModel,
        where: {
          title: {
            $or: tagArray
          }
        }
    }]
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

router.route('/createPost')
.post((req, res) => {
  let promiseArray = []
  req.body.tags.forEach((ele) => {
    promiseArray.push(TagModel.findOrCreate({
      where: {title: ele.title},
      defaults: {counter: 0}
    }))
  })
  Promise.all(promiseArray).then((tags) => {
    var tagsIdArray = []
    tags.forEach((ele) => {
      ele[0].increment('counter')
      tagsIdArray.push(ele[0].id)
    })

    PostModel.create({
      category: req.body.category,
      title: req.body.title,
      description: req.body.description,
      images: req.body.images,
      email: req.body.email,
      }).then((post) => {
        post.addTags(tagsIdArray)
        res.sendStatus(200)
      }).catch((err) => {
        res.sendStatus(500)
      })
    })
  })

module.exports = router
