import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Controller, Control } from 'react-hook-form'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import { styled } from '@mui/material/styles'
import { RadioProps } from '@mui/material'
import { RiCheckboxBlankCircleLine, RiCheckLine } from 'react-icons/ri'

import { RadioBox } from './styles'

export function RadioGroupIncoming({ control }: { control: Control }) {
  const defaultTheme = useContext(ThemeContext)

  const CustomRadio = styled(Radio)<RadioProps>(() => ({
    '&.Mui-checked': {
      backgroundColor: `${defaultTheme.colors.orange[400]}`,
      color: `${defaultTheme.colors.white}`,
    },
  }))

  return (
    <RadioBox>
      <Controller
        control={control}
        name='incoming'
        defaultValue='bruto'
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioGroup
            row
            aria-labelledby='Tipo de Rendimento'
            name='incoming'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <FormControlLabel
              label='Bruto'
              value='bruto'
              control={
                <CustomRadio
                  size='small'
                  icon={<RiCheckboxBlankCircleLine color='transparent' />}
                  checkedIcon={<RiCheckLine color='#fff' />}
                  inputProps={{
                    'aria-hidden': true,
                    'aria-label': 'bruto',
                    title: 'Tipo de Rendimento',
                  }}
                />
              }
            />
            <FormControlLabel
              label='Liquído'
              value='liquido'
              control={
                <CustomRadio
                  size='small'
                  icon={<RiCheckboxBlankCircleLine color='transparent' />}
                  checkedIcon={<RiCheckLine color='#fff' />}
                  inputProps={{
                    'aria-hidden': true,
                    'aria-label': 'bruto',
                    title: 'Tipo de Rendimento',
                  }}
                />
              }
            />
          </RadioGroup>
        )}
      />
    </RadioBox>
  )
}
