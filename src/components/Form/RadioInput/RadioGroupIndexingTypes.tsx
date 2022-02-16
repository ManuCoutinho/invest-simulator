import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Controller, Control } from "react-hook-form"
import { styled } from "@mui/material/styles"
import { RadioProps } from "@mui/material"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import { RiCheckboxBlankCircleLine, RiCheckLine } from "react-icons/ri"
import { RadioBox } from "./styles"


export function RadioGroupIndexingTypes({ control }: { control: Control }){ 
  const defaultTheme = useContext(ThemeContext);
  const CustomRadio = styled(Radio)<RadioProps>(()=>({
    "&.Mui-checked": {      
        backgroundColor: `${defaultTheme.colors.orange[400]}`,
        color: `${defaultTheme.colors.white}`,     
    }
  }))

  return (
    <RadioBox>
      <Controller
        control={control}
        name="Tipo de indexação"
        defaultValue="pos"
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioGroup            
            row
            aria-labelledby="Tipo de indexação"
            name="tipoIndexacao"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            <FormControlLabel value="pre" label="PRÉ" control={
              <CustomRadio 
                icon={<RiCheckboxBlankCircleLine color="transparent"/>} 
                checkedIcon={<RiCheckLine color="#fff"/>}             
                inputProps={{
                    'aria-hidden':true,
                    'aria-label': 'pre',
                    'title': 'Tipo de indexação',
                  }}  
              />}  
            />
            <FormControlLabel value="pos" label="PÓS"control={
              <CustomRadio 
                icon={<RiCheckboxBlankCircleLine color="transparent"/>} 
                checkedIcon={<RiCheckLine color="#fff"/>}             
                inputProps={{
                    'aria-hidden':true,
                    'aria-label': 'pos',
                    'title': 'Tipo de indexação',
                  }}  
              />}  
            />
            <FormControlLabel
              value="ipca"
              label="FIXADO"
              control={
              <CustomRadio
                icon={<RiCheckboxBlankCircleLine color="transparent"/>} 
                checkedIcon={<RiCheckLine color="#fff"/>}             
                inputProps={{
                    'aria-hidden':true,
                    'aria-label': 'fixado',
                    'title': 'Tipo de indexação',
                  }}  
              />}
            />
          </RadioGroup>
        )}
      />
    </RadioBox>
  );
}

