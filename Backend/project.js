const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
const multer = require('multer');


// =========================
// Project Schema and Model
// =========================

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true
    },

    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true
    },

    category: {
      type: String,
      required: [true, 'Project category is required'],
      trim: true
    },

    technologies: {
      type: [String],
      required: [true, 'Project technologies are required']
    },

    image: {
      type: String
    },

    githubUrl: {
      type: String
    },

    liveUrl: {
      type: String
    },

    year: {
      type: String
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model('Project', projectSchema);


// =========================
// Multer Configuration
// =========================

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(
      null,
      path.join(__dirname, 'uploads')
    );
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + '-' + file.originalname
    );
  }

});

const upload = multer({
  storage
});


// =========================
// Helper
// =========================

function parseTechnologies(technologies) {

  if (Array.isArray(technologies)) {
    return technologies;
  }

  if (typeof technologies === 'string') {

    try {

      const parsed = JSON.parse(technologies);

      if (Array.isArray(parsed)) {
        return parsed;
      }

    } catch {
      // Use comma-separated values
    }

    return technologies
      .split(',')
      .map(technology => technology.trim())
      .filter(Boolean);
  }

  return [];
}


// =========================
// CREATE PROJECT
// POST /api/project
// =========================

router.post(
  '',
  upload.single('img'),
  async (req, res) => {

    try {

      const {
        name,
        description,
        category,
        technologies,
        githubUrl,
        liveUrl,
        year,
        featured
      } = req.body;


      if (!name || !description || !category) {

        return res.status(400).json({
          error:
            'Name, description and category are required'
        });

      }


      const parsedTechnologies =
        parseTechnologies(technologies);


      if (parsedTechnologies.length === 0) {

        return res.status(400).json({
          error:
            'At least one technology is required'
        });

      }


      const project = new Project({

        name,

        description,

        category,

        technologies: parsedTechnologies,

        image: req.file
          ? `/files/${req.file.filename}`
          : undefined,

        githubUrl,

        liveUrl,

        year,

        featured:
          featured === true ||
          featured === 'true'
      });


      await project.save();


      res.status(201).json(project);

    } catch (err) {

      res.status(400).json({
        error: err.message
      });

    }

  }
);


// =========================
// GET ALL PROJECTS
// GET /api/project
// =========================

router.get(
  '',
  async (req, res) => {

    try {

      const projects =
        await Project
          .find()
          .sort({ createdAt: -1 });


      res.status(200).json(projects);

    } catch (err) {

      res.status(500).json({
        error: err.message
      });

    }

  }
);


// =========================
// GET SINGLE PROJECT
// GET /api/project/:id
// =========================

router.get(
  '/:id',
  async (req, res) => {

    try {

      const project =
        await Project.findById(req.params.id);


      if (!project) {

        return res.status(404).json({
          error: 'Project not found'
        });

      }


      res.status(200).json(project);

    } catch (err) {

      res.status(400).json({
        error: err.message
      });

    }

  }
);


// =========================
// UPDATE PROJECT
// PUT /api/project/:id
// =========================

router.put(
  '/:id',
  upload.single('img'),
  async (req, res) => {

    try {

      const {
        name,
        description,
        category,
        technologies,
        githubUrl,
        liveUrl,
        year,
        featured
      } = req.body;


      const updateData = {};


      if (name !== undefined) {
        updateData.name = name;
      }

      if (description !== undefined) {
        updateData.description = description;
      }

      if (category !== undefined) {
        updateData.category = category;
      }

      if (technologies !== undefined) {

        const parsedTechnologies =
          parseTechnologies(technologies);

        updateData.technologies =
          parsedTechnologies;
      }

      if (githubUrl !== undefined) {
        updateData.githubUrl = githubUrl;
      }

      if (liveUrl !== undefined) {
        updateData.liveUrl = liveUrl;
      }

      if (year !== undefined) {
        updateData.year = year;
      }

      if (featured !== undefined) {

        updateData.featured =
          featured === true ||
          featured === 'true';
      }


      if (req.file) {

        updateData.image =
          `/files/${req.file.filename}`;
      }


      const project =
        await Project.findByIdAndUpdate(
          req.params.id,
          updateData,
          {
            new: true,
            runValidators: true
          }
        );


      if (!project) {

        return res.status(404).json({
          error: 'Project not found'
        });

      }


      res.status(200).json(project);

    } catch (err) {

      res.status(400).json({
        error: err.message
      });

    }

  }
);


// =========================
// DELETE PROJECT
// DELETE /api/project/:id
// =========================

router.delete(
  '/:id',
  async (req, res) => {

    try {

      const project =
        await Project.findByIdAndDelete(
          req.params.id
        );


      if (!project) {

        return res.status(404).json({
          error: 'Project not found'
        });

      }


      res.status(200).json({
        message: 'Project deleted successfully',
        project
      });

    } catch (err) {

      res.status(400).json({
        error: err.message
      });

    }

  }
);


router.Project = Project;

module.exports = router;