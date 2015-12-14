import fs from 'fs';

export default function day14() {
  const data = fs.readFileSync('../data/day14.txt', 'utf-8');
  const simulation = new ReindeerRunner();
  data.split('\n').map(Reindeer.from).forEach(r => simulation.addReindeer(r));
  simulation.run(2503);

  var leaderByDistance = simulation.leaderByDistance;
  var leaderByPoints = simulation.leaderByPoints;
  console.log('******* Day 14 *******');
  console.log('After 2503 seconds,', leaderByDistance.name, 'has run', leaderByDistance.distance, 'km.');
  console.log('After the same time,', leaderByPoints.name, 'has', leaderByPoints.points, 'points.');
}


class ReindeerRunner {
  constructor() {
    this.reindeers = [];
  }

  addReindeer(r) {
    this.reindeers.push(r);
  }

  run(seconds) {
    for(var i = 0; i < 2503; i++)
      this.tick();
  }

  tick() {
    this.reindeers.forEach(r => r.tick());
    const bestDistance = Math.max(...this.reindeers.map(r => r.distance));
    this.reindeers.filter(r => r.distance === bestDistance).forEach(r => r.addPoint());
  }

  get leaderByDistance() {
    this.reindeers.sort((r1, r2) => r2.distance - r1.distance);
    return this.reindeers[0];
  }

  get leaderByPoints() {
    this.reindeers.sort((r1, r2) => r2.points - r1.points);
    return this.reindeers[0];
  }
}

export class Reindeer {

  static from(s) {
// Rudolph can fly 20 km/s for 7 seconds, but then must rest for 132 seconds.
    let [_, name, speed, runningTime, restingTime] =
      s.match(/(\w+) can fly (\d+) km.s for (\d+) seconds, but then must rest for (\d+) seconds./);
    return new Reindeer(name, Number(speed), Number(runningTime), Number(restingTime));
  }

  constructor(name, speed, runningTime, restingTime) {
    this.name = name;
    this.speed = speed;
    this.runningTime = runningTime;
    this.restingTime = restingTime;
    this.running = true;
    this.counter = this.runningTime;
    this.totalRunningTime = 0;
    this.points = 0;
  }

  addPoint() {
    this.points++;
  }

  tick() {
    if (this.running)
        this.totalRunningTime++;
    this.counter--;
    if (this.counter === 0) {
      if (this.running) {
        this.running = false;
        this.counter = this.restingTime;
      } else {
        this.running = true;
        this.counter = this.runningTime;
      }
    }
  }

  get distance() {
    return this.speed * this.totalRunningTime;
  }
}