import { useState, useEffect } from 'react'
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material'

import QuestionComponent from './QuestionComponent'

import questions from '../components/questions'

function Test(props) {
    const [name, setName] = useState('')
    const [answers, setAnswers] = useState([])
    const [isOver, setIsOver] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allAnswered, setAllAnswered] = useState(false)
    const [overPicture, setOverPicture] = useState({ text: '', picture: '' })

    useEffect(() => {
        const newArr = {}
        for (let i = 0; i <= questions.length; i++) {
            newArr[i + 1] = ''
        }
        setAnswers(newArr)
    }, [])

    useEffect(() => {
        const arr = []
        for (let key in answers) {
            arr.push(answers[key])
        }
        if (arr.filter((el) => el !== '').length === questions.length) {
            setIsOver(true)
        }
    }, [answers])



    const overHandler = () => {
        const arr = []
        for (let key in answers) {
            arr.push(answers[key])
        }
        const rightAnswers = arr.filter((el) => el === true).length
        const incorrectAnswers = arr.filter((el) => el === false).length
        const procent = Math.round((rightAnswers / questions.length) * 100)
        const random = Math.floor(Math.random() * 10) 
        if (random <= 1) {
            setOverPicture({ text: 'Пидор', picture: '0.jpg' })
        } else {
            if (procent >= 0 && procent <= 10) {
                setOverPicture({ text: 'Пидор', picture: '0.jpg' })
            } else if (procent > 10 && procent <= 20) {
                setOverPicture({ text: 'Жидкарь', picture: '10.jpg' })
            } else if (procent > 20 && procent <= 30) {
                setOverPicture({ text: 'Сказочный еблан', picture: '20.jpg' })
            } else if (procent > 30 && procent <= 40) {
                setOverPicture({ text: 'Чмоня', picture: '30.jpg' })
            } else if (procent > 40 && procent <= 50) {
                setOverPicture({ text: 'волосатый анус', picture: '40.jpg' })
            } else if (procent > 50 && procent <= 60) {
                setOverPicture({ text: 'почти смешарик', picture: '50.jpg' })
            } else if (procent > 60 && procent <= 70) {
                setOverPicture({ text: 'ЧУХОБЛОХ', picture: '60.jpg' })
            } else if (procent > 70 && procent <= 80) {
                setOverPicture({ text: 'вагиносгибатель', picture: '70.jpg' })
            } else if (procent > 80 && procent <= 90) {
                setOverPicture({ text: 'Сладкий бубалех', picture: '80.jpg' })
            } else if (procent > 90 && procent <= 100) {
                setOverPicture({ text: 'Настоящий слон, слоняра, базированный офицер', picture: '90.jpg' })
            }
        }


        setAllAnswered(true)
    }

    return <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <Box sx={{ backgroundColor: 'rgba(173, 170, 170, 0.8)' }}>
            <Typography sx={{ fontSize: '5rem' }}>Важный тест</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Card sx={{ boxShadow: 'none' }}>
                <CardHeader title={<Typography sx={{
                    fontSize: '1.5rem',
                    backgroundImage: ' linear-gradient(red, blue)',
                    color: 'transparent',
                    backgroundClip: 'text'
                }}
                >Тест на пидора
                </Typography>} />
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <img src='smile.png' style={{ height: '200px', width: '400px' }} />
                        {/* <TextField value={name} onChange={(e) => setName(e.target.value)} label="Ваше имя" /> */}
                    </Box>
                </CardContent>
            </Card>
            <Box>
                <Divider />
                <Typography sx={{ fontSize: '1.5rem' }}>{allAnswered ? 'Вопросов нет' : 'ВОПРОСЫ'}</Typography>
                <Divider />
            </Box>
            <Card sx={{ boxShadow: 'none' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {allAnswered ? (
                        <Box>
                            <img style={{ width: '20rem' }} src={overPicture.picture} />
                            <Box>
                                <Typography sx={{ fontSize: '1.5rem' }}>Ты</Typography>
                                <Typography sx={{ color: 'red', fontSize: '1rem' }}>{overPicture.text}</Typography>
                            </Box>
                        </Box>
                    ) :
                        (
                            <>
                                {questions.map((el, i) => (
                                    <QuestionComponent key={i} answers={answers} setAnswers={setAnswers} data={el} number={i + 1} />
                                ))}
                                <Box sx={{ marginTop: '1rem', width: '100%' }}>
                                    <Button onClick={() => overHandler()} disabled={!isOver} variant="outlined" sx={{ width: '100%' }}>Узнать</Button>
                                </Box>
                            </>
                        )}
                </CardContent>
            </Card>
        </Box>
    </Box>
}

export default Test