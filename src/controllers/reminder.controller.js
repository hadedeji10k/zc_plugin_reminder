/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import Response from '@utils/response.handler'

import { StatusCodes } from 'http-status-codes'

import { MESSAGE } from '@utils/constant'
import axios from 'axios'
import makeDb from '../db'
import getUser from '@utils/user'

const { GET_ALL_REMINDERS } = MESSAGE

const { OK } = StatusCodes

const db = makeDb()

const reminderController = {
	// TODO: call Zuri core Db API
	create: async (req, res) => {
		return res.send('heelo')
	},
	getAll: async (req, res) => {
		const data = await db.findAll('reminders')
		return Response.send(
			res,
			data.status,
			data.data,
			data.statusText,
			data.status === 200
		)
	},
	getUser: async (req, res, next) => {
		try {
			const { token } = req.body
			const user = await getUser(token)
			Response.send(res, StatusCodes.OK, user, 'User gotten successfully')
		} catch (error) {
			res.status(400).json({
				message: 'Error occured retrieving users',
			})
		}
	},
}

export default reminderController
