'use client'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import FormularioLabel from '@/components/formularioLabel'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { airports } from './airports'
import 'react-datepicker/dist/react-datepicker.css'

export const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531992711521'

export const FlightSearchPanel = () => {
  const now = new Date()

  const initialData = {
    adultos: 1,
    criancas: 0,
    bebes: 0,
    origem: '',
    destino: '',
    ida: undefined,
    volta: undefined,
    soIda: false
  }

  const [formReady, setFormReady] = useState(false)

  interface FormData {
    bebes: number
    criancas: number
    adultos: number
    soIda: boolean
    destino: string
    origem: string
    ida?: Date
    volta?: Date
  }

  const [formData, setFormData] = useState<FormData>({ ...initialData })

  const estaPronto = () => {
    formData.origem === '' ||
    formData.destino === '' ||
    formData.ida === null ||
    formData.ida === undefined
      ? setFormReady(false)
      : !formData.soIda &&
          (formData.volta === null || formData.volta === undefined)
        ? setFormReady(false)
        : setFormReady(true)
  }

  const handleInputChange = (
    event: React.SyntheticEvent<HTMLDivElement, Event>
  ) => {
    const target = event.target as HTMLInputElement
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleDataChange = (event: Date, trecho: string) => {
    if (trecho === 'ida') {
      setFormData({
        ...formData,
        ida: event
      })
    }
    if (trecho === 'volta') {
      setFormData({
        ...formData,
        volta: event
      })
    }
  }

  const decrementarPessoa = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    field: unknown
  ) => {
    event.preventDefault()
    switch (field) {
      case 'adultos':
        if (formData.adultos > 1) {
          setFormData({ ...formData, adultos: formData.adultos - 1 })
        }
        break
      case 'criancas':
        if (formData.criancas > 0) {
          setFormData({ ...formData, criancas: formData.criancas - 1 })
        }
        break
      case 'bebes':
        if (formData.bebes > 0) {
          setFormData({ ...formData, bebes: formData.bebes - 1 })
        }
        break
      default:
        break
    }
  }

  const incrementarPessoa = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    field: unknown
  ) => {
    event.preventDefault()
    switch (field) {
      case 'adultos':
        setFormData({ ...formData, adultos: formData.adultos + 1 })
        break
      case 'criancas':
        setFormData({ ...formData, criancas: formData.criancas + 1 })
        break
      case 'bebes':
        setFormData({ ...formData, bebes: formData.bebes + 1 })
        break
      default:
        break
    }
  }

  const btnDecrementarPessoa = (tipo: string) => {
    return (
      <div className="flex-auto w-1/4 mx-auto">
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-700"
          onClick={e => decrementarPessoa(e, tipo)}
        >
          −
        </button>
      </div>
    )
  }

  const btnIncrementarPessoa = (tipo: string) => {
    return (
      <div className="flex-auto w-1/4 mx-auto">
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-blue-700"
          onClick={e => incrementarPessoa(e, tipo)}
        >
          ✚
        </button>
      </div>
    )
  }

  const btnBuscarPassagens = (
    <button
      className={`rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${
        !formReady
          ? 'bg-opacity-50 cursor-not-allowed hover:bg-opacity-50 hover:shadow-none'
          : ''
      }`}
      id="btn-buscar-passagem"
      disabled={!formReady}
      onClick={e => {
        e.preventDefault()
        const origem = `%0AOrigem: *${formData.origem}*`
        const destino = `%0ADestino: *${formData.destino}*`
        const ida = formData.ida
          ? `%0AIda: *${formData.ida.toLocaleDateString('pt-Br')}*`
          : `%0AIda: *Data não definida*`
        const volta = formData.volta
          ? `%0AVolta: *${formData.volta.toLocaleDateString('pt-Br')}*`
          : ''
        const adultos = `%0APassageiros: *${formData.adultos} adulto(s)*`
        const criancas =
          formData.criancas > 0 ? `, *${formData.criancas} criança(s)*` : ''
        const bebes = formData.bebes > 0 ? `, *${formData.bebes} bebê(s)*` : ''

        const mensagem = `Olá, Gestor!%0AGostaria de solicitar propostas de passagens.${origem}${destino}${ida}${volta}${adultos}${criancas}${bebes}`
        const linkMensagem = `${whatsappUrl}&text=${mensagem}`
        window.open(linkMensagem, '_blank')
      }}
    >
      Buscar passagens
    </button>
  )

  useEffect(() => {
    setFormData(formData)
  }, [formData])

  return (
    <form id="form-encontrar-passagem">
      <div className="flex mb-3 gap-4 items-center">
        <div className="w-full md:w-2/12 text-center">
          <div className="flex items-center">
            <FormularioLabel label="Só ida?" inputName="cbSoIda" />
            <input
              type="checkbox"
              name="soIda"
              checked={formData.soIda}
              className="ml-2"
              onChange={e => {
                handleInputChange(e)
                estaPronto()
              }}
            />
          </div>
        </div>

        <DatePicker
          name="ida"
          placeholderText="Escolha a data de ida"
          selected={formData.ida}
          dateFormat="dd/MM/yyyy"
          onChange={(e: Date) => {
            handleDataChange(e, 'ida')
            estaPronto()
          }}
          minDate={now}
          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
        />

        {!formData.soIda && (
          <DatePicker
            name="volta"
            placeholderText="Escolha a data de volta"
            selected={formData.volta}
            dateFormat="dd/MM/yyyy"
            onChange={(e: Date) => {
              handleDataChange(e, 'volta')
              estaPronto()
            }}
            minDate={now}
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
          />
        )}
      </div>

      <div className="flex my-6 gap-4">
        <Autocomplete
          className="w-full"
          id="busca-origem"
          freeSolo
          disableClearable
          options={airports.map(a => `(${a.IATA}) ${a.city}, ${a.country}`)}
          onChange={(_, newValue) => {
            setFormData({ ...formData, origem: newValue || '' })
          }}
          renderInput={params => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                className:
                  'w-full rounded-md border border-transparent py-3 px-6 text-base placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp dark:text-white'
              }}
              sx={{
                '& .MuiInputBase-input': {
                  backgroundColor: 'transparent'
                }
              }}
              type="text"
              variant="outlined"
              name="origem"
              placeholder="Digite a sua origem"
              value={formData.origem}
              onSelect={e => {
                handleInputChange(e)
                estaPronto()
              }}
            />
          )}
        />

        <Autocomplete
          id="busca-destino"
          className="w-full"
          freeSolo
          disableClearable
          options={airports.map(a => `${a.city} (${a.IATA}), ${a.country}`)}
          onChange={(_, newValue) => {
            setFormData({ ...formData, destino: newValue || '' })
          }}
          renderInput={params => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                className:
                  'w-full rounded-md border border-transparent py-3 px-6 text-base placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp dark:text-white'
              }}
              sx={{
                '& .MuiInputBase-input': {
                  backgroundColor: 'transparent'
                }
              }}
              type="text"
              name="destino"
              placeholder="Digite o seu destino"
              value={formData.destino}
              onSelect={e => {
                handleInputChange(e)
                estaPronto()
              }}
            />
          )}
        />
      </div>

      <div className="-mx-4 flex flex-wrap">
        <div className="px-3 my-1 text-center w-full sm:w-4/12">
          <div className="flex mb-1">
            {btnDecrementarPessoa('adultos')}
            <div className="px-1 w-6/12">
              <input
                name="adultos"
                type="number"
                className="w-full rounded-md border border-transparent py-3 px-6 text-center text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                value={formData.adultos}
                onChange={e => {
                  handleInputChange(e)
                  estaPronto()
                }}
                disabled={true}
              />
            </div>
            {btnIncrementarPessoa('adultos')}
          </div>
          <FormularioLabel label="Adultos" inputName="txtAdultos" />
        </div>

        <div className="px-3 my-1 text-center w-full sm:w-4/12">
          <div className="flex mb-1">
            {btnDecrementarPessoa('criancas')}
            <div className="px-1 w-6/12">
              <input
                name="criancas"
                type="number"
                className="w-full rounded-md border border-transparent py-3 px-6 text-center text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                value={formData.criancas}
                onChange={e => {
                  handleInputChange(e)
                  estaPronto()
                }}
                disabled={true}
              />
            </div>
            {btnIncrementarPessoa('criancas')}
          </div>
          <FormularioLabel label="Crianças" inputName="txtCriancas" />
        </div>

        <div className="px-3 my-1 text-center w-full sm:w-4/12">
          <div className="flex mb-1">
            {btnDecrementarPessoa('bebes')}
            <div className="px-1 w-6/12">
              <input
                name="bebes"
                type="number"
                className="w-full rounded-md border border-transparent py-3 px-6 text-center text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                value={formData.bebes}
                onChange={e => {
                  handleInputChange(e)
                  estaPronto()
                }}
                disabled={true}
              />
            </div>
            {btnIncrementarPessoa('bebes')}
          </div>
          <FormularioLabel label="Bebês" inputName="txtBebes" />
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-full">{btnBuscarPassagens}</div>
      </div>
    </form>
  )
}
