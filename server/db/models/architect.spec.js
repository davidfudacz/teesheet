/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const { Architect } = require('../models')

describe('Architect model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('validations', () => {
    describe('do not allow null', () => {
      it('for givenName', async () => {
        let error
        try {
          await Architect.create({
            surname: 'SirName',
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })

      it('for surname', async () => {
        let error
        try {
          await Architect.create({
            givenName: 'GiveName',
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })
    }) // end describe do not allow null

    describe('do not allow empty', () => {
      it('for givenName', async () => {
        let error
        try {
          await Architect.create({
            surname: 'SirName',
            givenName: '',
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })

      it('for surname', async () => {
        let error
        try {
          await Architect.create({
            givenName: 'GiveName',
            surname: '',
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })
    }) // end describe do not allow empty

    describe('years are numeric', () => {
      it('for birthYear', async () => {
        let error
        try {
          await Architect.create({
            surname: 'SirName',
            givenName: 'GiveName',
            birthYear: 'haha'
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })

      it('for deathYear', async () => {
        let error
        try {
          await Architect.create({
            givenName: 'GiveName',
            surname: 'SirName',
            deathYear: 'haha',
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })
    }) // end describe years are numeric

    describe('url is a url', () => {
      it('for imgUrl', async () => {
        let error
        try {
          await Architect.create({
            surname: 'SirName',
            givenName: 'GiveName',
            imgUrl: 'soNotAUrl'
          })
        }
        catch (err) {
          error = err
        }
        expect(error.name).to.be.equal('SequelizeValidationError')
        expect(error.errors.length).to.be.equal(1)
      })
    }) // end describe url is a url
  }) // end describe validations

  describe('creation', () => {
    describe('creating an instance', () => {
      it('persists all columns', async () => {
        let architect, error
        try {
          architect = await Architect.create({
            givenName: 'GiveName',
            surname: 'SirName',
            birthYear: 1908,
            deathYear: 1987,
            imgUrl: 'http://www.img.com/img'
          })
        }
        catch (err) {
          error = err
        }
        expect(error).to.be.an('undefined')
        // just in case we add something and forget to test it...
        // add in the created and updatedAt fields
        expect(Object.keys(architect.dataValues).length).to.be.equal(8)
        expect(architect.givenName).to.be.equal('GiveName')
        expect(architect.surname).to.be.equal('SirName')
        expect(architect.birthYear).to.be.equal('1908')
        expect(architect.deathYear).to.be.equal('1987')
        expect(architect.imgUrl).to.be.equal('http://www.img.com/img')
      })
    }) // end describe creating an instance
  }) // end describe creations
}) // end describe Architect model
