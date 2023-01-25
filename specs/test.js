import assert from "assert";
import { describe } from "mocha";
import leagueTableTrial from "../components/leagueTable.js";

const leagueTableRun = leagueTableTrial();
console.log("🚀 ~ file: test.js:6 ~ leagueTableRun", leagueTableRun);

describe("Array", function () {
  describe("leagueTable()", function () {
    it("should return an array of length 20", function () {
      assert.equal(leagueTableRun.length, 20);
    });
  });

  describe("leagueTable()", function () {
    it("should return Chelsea in first position", function () {
      assert.equal(leagueTableRun[0].teamName, "Chelsea FC");
    });
  });

  describe("leagueTable()", function () {
    it("should return Sunderland in twentieth position", function () {
      assert.equal(leagueTableRun[19].teamName, "Sunderland AFC");
    });
  });

  describe("leagueTable()", function () {
    it("should return 41 points for the team in 14th place", function () {
      assert.equal(leagueTableRun[13].points, 41);
    });
  });
});
