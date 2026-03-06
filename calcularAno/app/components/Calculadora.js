import React, { useState, useEffect } from "react"

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native"

import { styles } from "../../styles/styles"
import { calcularAno } from "../../utils/calculandoAno"

export default function Calculadora() {

  const [idade, setIdade] = useState("")
  const [dia, setDia] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")

  useEffect(() => {

    const resultado = calcularAno(
      Number(idade),
      Number(dia),
      Number(mes)
    )

    setAno(resultado)

  }, [idade, dia, mes])

  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <Text style={styles.titulo}>
        Calcular Ano de Nascimento
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Dia de nascimento"
        keyboardType="numeric"
        value={dia}
        onChangeText={setDia}
      />

      <TextInput
        style={styles.input}
        placeholder="Mês de nascimento"
        keyboardType="numeric"
        value={mes}
        onChangeText={setMes}
      />

      {ano ? (
        <Text style={styles.resultado}>
          Ano de nascimento: {ano}
        </Text>
      ) : null}

    </KeyboardAvoidingView>

  )
}