/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container'
import html from '/src/img/html.png'
import css from '/src/img/css.png'
import js from '/src/img/js.png'
import react from '/src/img/react.png'
import sass from '/src/img/sass.png'
import bootstrap from '/src/img/bootstrap.png'
import figma from '/src/img/figma.png'
import git from '/src/img/git.png'
import github from '/src/img/github.png'
import ts from '/src/img/ts.png'
import next from '/src/img/next.png'
import node from '/src/img/node.png'
import mongo from '/src/img/mongo.png'
import mysql from '/src/img/mysql.png'
import csharp from '/src/img/csharp.png'
import dotnet from '/src/img/dotnet.png'
import Tilt from 'react-parallax-tilt'

import { useTranslation } from 'react-i18next';
import {
    FaJava, FaAws, FaDocker, FaCode
} from 'react-icons/fa';
import {
    SiSupabase, SiVite, SiMongodb
} from 'react-icons/si';
import {
    DiSqllite, DiScrum
} from 'react-icons/di';
import {
    TbApi, TbSql
} from 'react-icons/tb';
import {
    BsKanban
} from 'react-icons/bs';

import '../Skills/Skills.sass'


export default function Skills() {
    const { t } = useTranslation();

    const skillGroups = [
        {
            title: t('cat_frontend'),
            skills: [
                { name: 'HTML5', img: html, level: 98 },
                { name: 'CSS3', img: css, level: 95 },
                { name: 'JavaScript', img: js, level: 92 },
                { name: 'TypeScript', img: ts, level: 88 },
                { name: 'React', img: react, level: 90 },
                { name: 'Next.js', img: next, level: 85 },
                { name: 'Vite', icon: <SiVite color="#646CFF" />, level: 90 },
                { name: 'Sass', img: sass, level: 85 },
                { name: 'Bootstrap', img: bootstrap, level: 90 },
                { name: 'Figma', img: figma, level: 80 },
            ]
        },
        {
            title: t('cat_backend'),
            skills: [
                { name: 'Node.js', img: node, level: 80 },
                { name: 'Java', icon: <FaJava color="#ED8B00" />, level: 75 },
                { name: 'C#', img: csharp, level: 70 },
                { name: '.NET', img: dotnet, level: 70 },
                { name: 'APIs REST', icon: <TbApi color="#4ec9d1" />, level: 85 },
                { name: 'N8N', icon: <FaCode color="#FF6C37" />, level: 75 },
            ]
        },
        {
            title: t('cat_database'),
            skills: [
                { name: 'MySQL', img: mysql, level: 85 },
                { name: 'SQL', icon: <TbSql color="#4479A1" />, level: 85 },
                { name: 'MongoDB', img: mongo, level: 75 },
                { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" />, level: 75 },
            ]
        },
        {
            title: t('cat_tools'),
            skills: [
                { name: 'Git', img: git, level: 95 },
                { name: 'GitHub', img: github, level: 95 },
                { name: 'AWS', icon: <FaAws color="#FF9900" />, level: 60 },
                { name: 'Docker', icon: <FaDocker color="#2496ED" />, level: 65 },
                { name: 'Scrum', icon: <DiScrum color="#0096D6" />, level: 95 },
                { name: 'Kanban', icon: <BsKanban color="#007BFF" />, level: 95 },
            ]
        }
    ];

    return (
        <div className='skills-page'>
            <Container className="skills-container">
                <h1 className='title'>// {t('habilidades_titulo')}</h1>

                <div className="skills-sections-wrapper">
                    {skillGroups.map((group, idx) => (
                        <div key={idx} className='skills-section'>
                            <h2 className="section-subtitle">{group.title}</h2>
                            <div className='skills-grid'>
                                {group.skills.map((skill, sIdx) => (
                                    <SkillItem
                                        key={sIdx}
                                        img={skill.img}
                                        icon={skill.icon}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

function SkillItem({ img, icon, name, level }) {
    return (
        <div className="skill-card">
            <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.1}
                transitionSpeed={1500}
            >
                <div className="skill-icon-wrapper">
                    {img ? (
                        <img src={img} alt={name} />
                    ) : icon ? (
                        <div className="skill-icon-svg">{icon}</div>
                    ) : (
                        <div className="skill-placeholder">
                            <span>{name.charAt(0)}</span>
                        </div>
                    )}

                    {/* Ring for percentage */}
                    <svg className="skill-ring" viewBox="0 0 100 100">
                        <circle className="ring-bg" cx="50" cy="50" r="45" />
                        <circle
                            className="ring-fill"
                            cx="50" cy="50" r="45"
                            style={{ strokeDasharray: `${(level * 283) / 100} 283` }}
                        />
                    </svg>
                    <span className="skill-percent">{level}%</span>
                </div>
            </Tilt>
            <p>{name}</p>
        </div>
    )
}
