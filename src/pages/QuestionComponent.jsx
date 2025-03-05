import { useEffect, useState } from 'react'

import { Box, Typography, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";

function Item(props) {
    const { data, number, answers, setAnswers } = props
    const [value, setValue] = useState('')
    const [openField, setOpenFiled] = useState(false)
    const [femQuest, setFemQuest] = useState(false)
    // console.log(data)
    const itsFeminizm = data.question === 'Феминизм: стрем или норм?' ? value === 'норм' ? true : false : false
    const handleChange = (e) => {
        if (data.question === 'Феминизм: стрем или норм?' && e.target.value === 'норм') {
            setValue('')
            setFemQuest(true)
        } else if (e.target.value === 'все равно норм, ниже напишу почему') {
            setValue(e.target.value)
            setFemQuest(true)
            setOpenFiled(true)
            const isTrue = e.target.value !== '' ? e.target.value === data.rightAnswer ? true : false : false
            setAnswers(answers => answers = { ...answers, [number]: isTrue })
        } else {
            setValue(e.target.value)
            setFemQuest(false)
            setOpenFiled(false)
            const isTrue = e.target.value !== '' ? e.target.value === data.rightAnswer ? true : false : false
            setAnswers(answers => answers = { ...answers, [number]: isTrue })
        }
    }

    return (
        <Box sx={{ border: '1px solid rgba(164, 164, 164, 0.5)', padding: '0.5rem', width: '100%', borderRadius: '5px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '3rem' }}>
                <Typography>{number} Вопрос</Typography>
                <Typography sx={{ fontSize: '1.2rem', textAlign: 'left' }}>{data.question}</Typography>
            </Box>
            <Box>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{ color: itsFeminizm && 'red' }}
                >
                    {data.variants.map((el, i) => (
                        <FormControlLabel key={i} sx={{ color: itsFeminizm && el === 'норм' && 'red' }} value={el} control={<Radio />} label={<Typography sx={{ textAlign: 'left' }} >{el}</Typography>} />
                    ))}
                    <FormControlLabel sx={{ display: 'none' }} value={''} control={<Radio />} label={''} />
                    {femQuest && <FormControlLabel value={'все равно норм, ниже напишу почему'} control={<Radio />} label={'все равно норм, ниже напишу почему'} />}
                    {openField && (
                        <TextField sx={{ padding: '0.5rem' }} disabled={true} value='Да,да всем похуй' />
                    )}
                </RadioGroup>
            </Box>
        </Box>
    )
}

export default Item