import React, {FC, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {ThemeContext} from 'styled-components';
import {Table, Row} from 'react-native-table-component';

import {Screen, Typography} from '../../../shared/components';
import {getItem} from '../../../shared/utils/localeStorage';
import {PersonalDetails, Project} from '../../../types/types';
import {getProjects} from '../../../shared/utils/api';
import {
  HIGH_SCORE_LIMIT,
  LOW_SCORE_LIMIT,
  HIGH_SCORE_COLOR,
  LOW_SCORE_COLOR,
  PERSONAL_DETAILS_TABLE_WIDTH,
  PROJECTS_TABLE_WIDTH,
} from '../../../constants/constants';

const Image = styled.Image`
  width: 84px;
  height: 100px;
  border-radius: 4px;
  margin-left: 8px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin: 8px;
`;

const ScrollView = styled.ScrollView``;

const InfoScreen: FC = () => {
  const {t} = useTranslation('infoScreen');
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>();
  const [token, setToken] = useState('');
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState<Project[]>();
  const theme = useContext(ThemeContext);
  const personalDetailsTableColumns = [t('avatar'), t('joinedAt'), t('team'), t('name')];
  const projectsTableColumns = [t('deadline'), t('bugs'), t('duration'), t('score'), t('name')];

  useEffect(() => {
    (async () => {
      try {
        const data = await getItem('details');
        if (data) {
          const parsedData = JSON.parse(data);
          setPersonalDetails(parsedData);
        }
        const fetchedToken = await getItem('token');
        if (fetchedToken) {
          setToken(fetchedToken);
        }
      } catch (e) {
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (token === '') {
      return;
    }
    (async () => {
      try {
        const projects = await getProjects(token);
        if (projects) {
          setProjects(projects);
        }
      } catch (e) {
        setError(true);
      }
    })();
  }, [token]);

  const getPersonalDetailsAsArray = (details: PersonalDetails) => {
    const {avatar, joinedAt, Team, name} = details;

    const personalDetailsAsArray = [];
    personalDetailsAsArray.push(<Image source={{uri: avatar}} />);
    personalDetailsAsArray.push(joinedAt);
    personalDetailsAsArray.push(Team);
    personalDetailsAsArray.push(name);
    return personalDetailsAsArray;
  };

  const getProjectAsArray = (project: Project) => {
    const {name, score, durationInDays, bugsCount, madeDadeline} = project;
    const projectAsArray = [];
    const madeDeadlineStr = madeDadeline ? 'true' : 'false';
    projectAsArray.push(madeDeadlineStr);
    projectAsArray.push(bugsCount);
    projectAsArray.push(durationInDays);
    projectAsArray.push(score);
    projectAsArray.push(name);
    return projectAsArray;
  };

  const palleteTextColor = theme.palette.textColor;

  if (error) {
    return <Typography>{t('unableFetchData')}</Typography>;
  }

  return (
    <Screen>
      <Title>{t('title')}</Title>
      {personalDetails && (
        <>
          <Table borderStyle={{borderWidth: 1, borderColor: palleteTextColor}}>
            <Row
              data={personalDetailsTableColumns}
              widthArr={PERSONAL_DETAILS_TABLE_WIDTH}
              style={{
                height: 50,
                backgroundColor: theme.palette.secondary,
                borderColor: palleteTextColor,
              }}
              textStyle={{
                textAlign: 'center',
                color: palleteTextColor,
                fontWeight: 'bold',
              }}
            />
          </Table>
          <Table borderStyle={{borderWidth: 1, borderColor: palleteTextColor}}>
            <Row
              data={getPersonalDetailsAsArray(personalDetails)}
              widthArr={PERSONAL_DETAILS_TABLE_WIDTH}
              style={{height: 120}}
              textStyle={{
                textAlign: 'center',
                fontWeight: '400',
                color: palleteTextColor,
              }}
            />
          </Table>
        </>
      )}
      {projects && projects.length && (
        <>
          <Table style={{marginTop: 8}} borderStyle={{borderWidth: 1, borderColor: palleteTextColor}}>
            <Row
              data={projectsTableColumns}
              widthArr={PROJECTS_TABLE_WIDTH}
              style={{
                height: 50,
                backgroundColor: theme.palette.secondary,
                borderColor: palleteTextColor,
              }}
              textStyle={{
                textAlign: 'center',
                color: palleteTextColor,
                fontWeight: 'bold',
              }}
            />
          </Table>
          <ScrollView>
            <Table borderStyle={{borderWidth: 1, borderColor: palleteTextColor}}>
              {projects.map((project, index) => (
                <Row
                  key={index}
                  data={getProjectAsArray(project)}
                  widthArr={PROJECTS_TABLE_WIDTH}
                  style={{
                    height: 60,
                    backgroundColor:
                      project.score < LOW_SCORE_LIMIT ? LOW_SCORE_COLOR : project.score > HIGH_SCORE_LIMIT ? HIGH_SCORE_COLOR : undefined,
                  }}
                  textStyle={{
                    textAlign: 'center',
                    fontWeight: '400',
                    color: palleteTextColor,
                  }}
                />
              ))}
            </Table>
          </ScrollView>
        </>
      )}
    </Screen>
  );
};

export default InfoScreen;
