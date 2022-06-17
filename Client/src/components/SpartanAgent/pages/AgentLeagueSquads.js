import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import axios from "axios";
import SidebarAgent from "../SidebarAgent";
import "./AgentLeagueSquads.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(100);
  var data = JSON.stringify(values, 0, 2);
  console.log(data);

  await axios({
    method: "POST",
    url: "https://localhost:7122/api/League/addSquadsToLeague",
    data: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
};

function AgentLeaguesSquads() {

  const [league, setLeague] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7122/api/League/getLeagues", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(resp => resp.json())
      .then(resp => setLeague(resp))
  }, [])

  const [squads, setSquads] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7122/api/Squad", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(resp => resp.json())
      .then(resp => setSquads(resp))
  }, [])

  return (
    <>
      <SidebarAgent />

      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop }
          },
          pristine,
          form,
          submitting,
          values
        }) => {
          return (
            <form onSubmit={handleSubmit} className="form__container">
              <div className="select__league">
                <label>League</label>
                <Field name="leaguesLeagueId" component="select" placeholder="League">
                  <option selected >Select league</option>
                  {
                    league.map(x => {
                      return (
                        <option value={x.leagueId}>{x.leagueName}</option>
                      )
                    })
                  }
                </Field>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => push("squadsTeamId", undefined)}
                >
                  Add Squad
                </button>
                <button type="button" onClick={() => pop("squadsTeamId")}>
                  Remove Squad
                </button>
              </div>
              <FieldArray
                name="squadsTeamId"
              >
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name} className="select__squad">
                      <label>Squad #{index + 1}</label>
                      <Field
                        name={`${name}.teamId`}
                        component="select"
                        placeholder="Choose an existed squad ID"
                      >
                        <option selected>Select squad</option>
                        {
                          squads.map(x => {
                            return (
                              <option value={x.teamId}>{x.name}: ({x.isVerified ? "Verified" : "Unverifed"})</option>
                            )
                          })
                        }
                      </Field>
                      <span
                        onClick={() => fields.remove(index)}
                        style={{ cursor: "pointer" }}
                      ></span>
                    </div>
                  ))
                }
              </FieldArray>

              <div className="buttons">
                <button className="submit__btn" type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          );
        }}
      />
    </>
  );
};

export default AgentLeaguesSquads;