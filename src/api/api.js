const makeRequest = async (url, method, params) => {
  const options = {
    method,
    body: params && JSON.stringify({
      ...params
    })
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const { error } = json;

    if (error) {
      const { message, code } = error;
      throw new Error(message || code);
    }

    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getNba = () => makeRequest('/prod/v2/2019/teams.json', 'get');

export const getEuroLeague = ({
  query = 'query StandingsQuery($lang:String!,$liveLeagueSlug:String,$standingsMatchSlug:String,$standingsLeagueSlug:String,$sportSlug:String!,$withMatches:Boolean!,$liveDatebetween:[String]){standings:Standing(lang:$lang,match_slug:$standingsMatchSlug,league_slug:$standingsLeagueSlug,sport_slug:$sportSlug,short:false){...Standing...StandingForm @include(if:$withMatches)}liveMatches:Match(lang:$lang,league_slug:$liveLeagueSlug,sport_slug:$sportSlug,datebetween:$liveDatebetween,match_status:"live")@include(if:$withMatches){...StandingLiveMatch}}fragment Standing on Standing{season_year season_name league_table_round league_table_name description matches_total win_total draw_total loss_total goals_for_total goals_against_total points_total position_total win_total_live draw_total_live loss_total_live points_total_live matches_total_live position_total_live goals_for_total_live goals_against_total_live promotion_name promotion_id promotion_name_live promotion_id_live team{name slug logo country{iso}}pct_total sort_position_total}fragment StandingForm on Standing{matches{...StandingFormMatch}}fragment StandingFormMatch on Match{status{code}winner sport_slug result_score result_scores{type value}is_finished teams{slug name}slug match_date}fragment StandingLiveMatch on Match{...StandingFormMatch teams{name logo slug}is_live season_year league_slug}',
  lang = 'en',
  liveDatebetween = ['2020-04-27 26:25:00', '2020-04-27 26:25:00'],
  sportSlug = 'basketball',
  standingsLeagueSlug = 'international-euroleague',
  withMatches = true
}) => makeRequest('/graphql', 'post', {
  query,
  variables: {
    lang,
    liveDatebetween,
    sportSlug,
    standingsLeagueSlug,
    withMatches
  }
});
