const express = require('express');
const router = express.Router();
const Branch = require('../models/branch');
// @route GET api/branch/all-branches
// @desc get all branches
// @access Public

router.get('/all', (req, res) => {
    const errors = {};
    Branch.find()
        .then((branches) => {
            if (!branches) {
                errors.nobranch = "There is no branches";
                res.status(404).json(errors);
            }
            res.json(branches);
        })
        .catch((err) => res.status(404).json(err));
});

// @route POST api/branch/add-branch
// @desc add branch
// @access Public
router.post("/add-branch", (req, res) => {
    const errors = {};
    Branch.findOne({branch_id: req.body.branch_id})
        .then((branch) => {
            if (branch) {
                errors.branch = "Branch ID already exists";
                return res.status(400).json(errors);
            } else {
                const newBranch = new Branch({
                    branch_id: req.body.branch_id,
                    name: req.body.name,
                    location: req.body.location,
                    contact: req.body.contact
                });
                newBranch.save()
                    .then(branch => res.json(branch))
                    .catch(err => console.log(err));
            }
        })
        .catch((err) => res.status(404).json(err));

});

// @route DELETE api/branch/delete/:id
// @desc delete branch
// @access Public
router.delete(
    "/delete/(:id)",
    (req, res) => {
        Branch.deleteOne({branch_id: req.params.id}, (err, branch) => {
            if (!err) {
                res.json(branch);
            } else {
                res.status(404).json(err);
            }
        });
    });


module.exports = router;
