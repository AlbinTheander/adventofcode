import {expect} from 'chai';

import {Context, Fn} from '../lib/day7';


describe('Day 7', () => {
  describe('Fn', ()=> {
    it('can parse a simple assignment', () => {
      const fn = new Fn('123 -> x');
      expect(fn.name).to.equal('x');
      expect(fn.right).to.equal('123');
    });
    it('can parse a one-param operator', () => {
      const fn = new Fn('NOT da -> hg');
      expect(fn.name).to.equal('hg');
      expect(fn.op).to.equal('NOT');
      expect(fn.right).to.equal('da');
    });
    it('can parse a two-param operator', () => {
      const fn = new Fn('du AND a -> o');
      expect(fn.name).to.equal('o');
      expect(fn.left).to.equal('du');
      expect(fn.op).to.equal('AND');
      expect(fn.right).to.equal('a');
    });
  });

  describe('Context', () => {
    let context;
    beforeEach(() => {
      context = new Context();
    });
    it('can evaluate constants', () => {
      expect(context.getValue('123')).to.equal(123);
    });
    it('can evaluate an assignment', () => {
      context.addFn(new Fn('123 -> x'));
      expect(context.getValue('x')).to.equal(123);
    });
    it('can evaluate nested assignments', () => {
      context.addFn(new Fn('y -> x'));
      context.addFn(new Fn('7 -> y'));
      expect(context.getValue('x')).to.equal(7);
    });
    it('can evaluate NOT expressions', () => {
      context.addFn(new Fn('NOT y -> x'));
      context.addFn(new Fn('5 -> y'));
      expect(context.getValue('x')).to.equal(65530);
    });
    it('can evaluate OR expressions', () => {
      context.addFn(new Fn('2 -> y'));
      context.addFn(new Fn('x OR y -> a'));
      context.addFn(new Fn('4 -> x'));
      expect(context.getValue('a')).to.equal(6);
    });
    it('can evaluate AND, LSHIFT and RSHIFT', () => {
      var fns = ['123 -> x',
                 '456 -> y',
                  'x AND y -> d',
                  'x OR y -> e',
                  'x LSHIFT 2 -> f',
                  'y RSHIFT 2 -> g',
                  'NOT x -> h',
                  'NOT y -> i'];
      fns.forEach(fn => context.addFn(new Fn(fn)));
      expect(context.getValue('d')).to.equal(72);
      expect(context.getValue('e')).to.equal(507);
      expect(context.getValue('f')).to.equal(492);
      expect(context.getValue('g')).to.equal(114);
      expect(context.getValue('h')).to.equal(65412);
      expect(context.getValue('i')).to.equal(65079);
      expect(context.getValue('x')).to.equal(123);
      expect(context.getValue('y')).to.equal(456);
    });
  });
});

