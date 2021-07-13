import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import {useStyles, BootstrapInput} from './../../../_components/selector';

export default function CustomizedSelects() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
        <div className="sport-container">
            <p className="info">Os valores dos filtros são com base no percentil: Baixo (Menor que 40 %), Mediano (entre 40% e 70%), Alto (entre 70% e 90%), Excelência (maior que 90%).</p>
            <div className="options-container">
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                    <option aria-label="Sexo" value="" />
                    <option value={10}>Feminino</option>
                    <option value={20}>Masculino</option>
                    </NativeSelect>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                    <option aria-label="Sexo" value="" />
                    <option value={10}>Feminino</option>
                    <option value={20}>Masculino</option>
                    </NativeSelect>
                </FormControl>

            </div>

      </div>
    );
  }
  