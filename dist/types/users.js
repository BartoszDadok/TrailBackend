"use strict";
const { gql } = require("apollo-server");
module.exports = gql `
    type Query {
        users: [Data!]!
    }

    type Trails {
        id: Int!
        url: String!
        time: Float!
        sessionDate: Float!
    }

    type User {
        id: Int!
        country: String!
        device: String!
        browser: String!
        trafficSource: String!
        firstSession: Float!
        convertedSession: Float!
        trails: [Trails!]!
    }

    type DataToChart {
        name: [String!]!
        users: Int!
    }
    type TimePeriods {
        yesterday: [DataToChart!]!
        today: [DataToChart!]!
        month: [DataToChart!]!
        week:  [DataToChart!]!
        year:  [DataToChart!]!
        quarter: [DataToChart!]!
        all: [DataToChart!]!
    }
    type Device {
        name: String!
        value: Int!
    }
    type Hours {
        hour: String!
        value: Int!
    }

    type WeekDays {
        sunday: [Hours!]!
        monday: [Hours!]!
        tuesday: [Hours!]!
        wednesday: [Hours!]!
        thursday: [Hours!]!
        friday: [Hours!]!
        saturday: [Hours!]!
    }
    type Region {
        v: String!,
        fullName: String!
        value: Int!
    }
    type Source {
        name: String!
        users: Int!
    }
    type UsersTablePeriods {
        yesterday: [User!]!
        today: [User!]!
        month: [User!]!
        week:  [User!]!
        year:  [User!]!
        quarter: [User!]!
        all: [User!]!
    }
    
    type BestPage {
        name: String!
        users: Int!
    }
    
    type Data {
        id: String!
        email: String!
        avatar: String!
        project: String!
        clients: [User!]!
        usersChart: TimePeriods!
        deviceChart: [Device!]!
        timeChart: WeekDays!
        geoChart: [Region!]!
        sourceChart: [Source!]!
        averageTimeChart: String!
        usersTable: UsersTablePeriods!
        bestPages: [BestPage!]!
    }
`;
