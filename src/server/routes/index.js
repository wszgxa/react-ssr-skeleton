/**
 * Created by gxzhao on 30/12/2017.
 */
import express from 'express'

// import React from 'react';

const router = express.Router()

router.get('*', (req, res) => {
  res.render('index', {html: '<div>lalal</div>'})
})

export default router