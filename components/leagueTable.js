import leagueData from "../data/leagueData.json" assert { type: "json" };
import teamData from "../data/teamData.json" assert { type: "json" };

const leagueTable = () => {
  const leagueArray = [];

  const popLeagueArray = () => {
    teamData.clubs.map((club, index) => {
      leagueArray.push({
        rank: index,
        teamName: club.name,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        get gd() {
          return this.gf - this.ga;
        },
        points: 0,
      });
    });
  };

  popLeagueArray();

  const theFunction = () => {
    leagueData.rounds.map((round) => {
      round["matches"].forEach((match) => {
        leagueArray.forEach((team) => {
          if (match.team1 === team.teamName) {
            if (match.score.ft[0] > match.score.ft[1]) {
              team.wins += 1;
              team.gf += match.score.ft[0];
              team.ga += match.score.ft[1];
              team.points += 3;
            } else if (match.score.ft[0] < match.score.ft[1]) {
              team.losses += 1;
              team.gf += match.score.ft[0];
              team.ga += match.score.ft[1];
            } else {
              team.draws += 1;
              team.gf += match.score.ft[0];
              team.ga += match.score.ft[1];
              team.points += 1;
            }
          } else if (match.team2 === team.teamName) {
            if (match.score.ft[1] > match.score.ft[0]) {
              team.wins += 1;
              team.gf += match.score.ft[1];
              team.ga += match.score.ft[0];
              team.points += 3;
            } else if (match.score.ft[1] < match.score.ft[0]) {
              team.losses += 1;
              team.gf += match.score.ft[1];
              team.ga += match.score.ft[0];
            } else {
              team.draws += 1;
              team.gf += match.score.ft[1];
              team.ga += match.score.ft[0];
              team.points += 1;
            }
          }
        });
      });
    });
    leagueArray.sort((a, b) => {
      return b.points - a.points || b.gd - a.gd || b.wins - a.wins;
    });
    leagueArray.forEach((team) => (team.rank = leagueArray.indexOf(team) + 1));
  };

  theFunction();
  return leagueArray;
};

export default leagueTable;
