const mongoose = require("mongoose");
import { Schema, model } from "mongoose";
import { Data } from "../../generated/graphQl-backend";

const trailSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    url: {
        type: String,
        trim: true,
    },
    time: {
        type: Number,
    },
    sessionDate: {
        type: Number,
    },
});

const clientsSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    country: {
        type: String,
        trim: true,
    },
    device: {
        type: String,
        trim: true,
    },
    browser: {
        type: String,
        trim: true,
    },
    trafficSource: {
        type: String,
        trim: true,
    },
    firstSession: {
        type: Number,
    },
    convertedSession: {
        type: Number,
    },
    trails: {
        type: [trailSchema],
    },
});

const dataToChartSchema = new mongoose.Schema({
    name: [{
        type: String,
    }],
    users: {
        type: Number,
    },
});
const timePeriodsSchema = new mongoose.Schema({
    yesterday: {
        type: [dataToChartSchema],
    },
    today: {
        type: [dataToChartSchema],
    },
    week: {
        type: [dataToChartSchema],
    },
    year: {
        type: [dataToChartSchema],
    },
    all: {
        type: [dataToChartSchema],
    },
    quarter: {
        type: [dataToChartSchema],
    },
    month: {
        type: [dataToChartSchema],
    },
});

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    value: {
        type: Number,
    },
});
const hoursSchema = new mongoose.Schema({
    hour: {
        type: String,
    },
    value: {
        type: Number,
    },
});
const weekDaysSchema = new mongoose.Schema({
    sunday: {
        type: [hoursSchema],
    },
    monday: {
        type: [hoursSchema],
    },
    tuesday: {
        type: [hoursSchema],
    },
    wednesday: {
        type: [hoursSchema],
    },
    thursday: {
        type: [hoursSchema],
    },
    friday: {
        type: [hoursSchema],
    },
    saturday: {
        type: [hoursSchema],
    },
});

const regionSchema = new mongoose.Schema({
    v: {
        type: String,
    },
    fullName: {
        type: String,
    },
    value: {
        type: Number,
    },
});
const sourceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    users: {
        type: Number,
    },

});
const usersTableSchema = new mongoose.Schema({
    yesterday: {
        type: [clientsSchema],
    },
    today: {
        type: [clientsSchema],
    },
    week: {
        type: [clientsSchema],
    },
    year: {
        type: [clientsSchema],
    },
    all: {
        type: [clientsSchema],
    },
    quarter: {
        type: [clientsSchema],
    },
    month: {
        type: [clientsSchema],
    },
});
const bestPagesSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    users: {
        type: Number,
    },

});
const userSchema = new Schema({
    id: {
        type: String,
    },
    email: {
        type: String,
    },
    avatar: {
        type: String,
        trim: true,
    },
    project: {
        type: String,
        trim: true,
    },
    clients: {
        type: [clientsSchema],
    },
    usersChart: {
        type: timePeriodsSchema,
    },
    deviceChart: {
        type: [deviceSchema],
    },
    timeChart: {
        type: weekDaysSchema,
    },
    geoChart: {
        type: [regionSchema],
    },
    sourceChart: {
        type: [sourceSchema],
    },
    averageTimeChart: {
        type: String,
    },
    usersTable: {
        type: usersTableSchema,
    },
    bestPages: {
        type: [bestPagesSchema],
    },
});


const Users = model<Data>("User", userSchema);


module.exports = { Users };