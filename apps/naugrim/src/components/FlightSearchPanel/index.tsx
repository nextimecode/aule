'use client'

import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import { Collapsible } from '@/components/collabsible'
import FormularioLabel from '@/components/formularioLabel'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import { airports } from './airports'
import 'react-datepicker/dist/react-datepicker.css'

export const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531992711521'

export const FlightSearchPanel = () => {
  const urlWallpaper = 'assets/img/plane3.jpg'
  const now = new Date()

  const initialData = {
    adultos: 1,
    criancas: 0,
    bebes: 0,
    origem: '',
    destino: '',
    ida: now,
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

  // const trocarRota = (event) => {
  //   event.preventDefault()
  //   const aux = formData.origem
  //   setFormData({
  //     ...formData,
  //     origem: formData.destino,
  //     destino: aux
  //   })
  // }

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

  // const btnTrocarRota =
  // (
  //   <button
  //     className="btn-trocar btn-std my-1 bg-red text-white rounded-circle position-absolute"
  //     onClick={(e) => trocarRota(e)}
  //   >⇋</button>
  // )

  const btnBuscarPassagens = (
    <button
      className="py-2 px-4 rounded bg-red-500 text-white w-full disabled:opacity-50"
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

        const mensagem = `Olá, EiMilhas!%0AGostaria de solicitar propostas de passagens.${origem}${destino}${ida}${volta}${adultos}${criancas}${bebes}`
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
    <div className="container mx-auto my-5">
      <div
        className="flex mx-0 bg-cover rounded-lg font-primary"
        style={{
          backgroundImage: `url(${urlWallpaper})`,
          minHeight: '120px'
        }}
      >
        <div
          className="rounded-lg p-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
        >
          <h1>Encontre sua passagem ideal com o maior desconto!</h1>
          <div className="md:w-9/12 sm:w-full">
            <form id="form-encontrar-passagem">
              <div className="container p-1">
                <div className="flex flex-wrap mb-3">
                  <div className="w-full md:w-2/12 text-center">
                    <div className="flex">
                      <FormularioLabel label="Só ida?" inputName="cbSoIda" />
                    </div>
                    <div className="flex m-auto" style={{ display: 'inherit' }}>
                      <input
                        type="checkbox"
                        name="soIda"
                        checked={formData.soIda}
                        onChange={e => {
                          handleInputChange(e)
                          estaPronto()
                        }}
                        className="m-auto"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-5/12 text-center">
                    <DatePicker
                      name="ida"
                      placeholderText="Ida"
                      selected={formData.ida}
                      dateFormat="dd/MM/yyyy"
                      onChange={(e: Date) => {
                        handleDataChange(e, 'ida')
                        estaPronto()
                      }}
                      minDate={now}
                      className="m-auto w-full my-1 text-center block"
                    />
                  </div>

                  {!formData.soIda && (
                    <div className="w-full md:w-5/12 text-center">
                      <DatePicker
                        name="volta"
                        placeholderText="Volta"
                        selected={formData.volta}
                        dateFormat="dd/MM/yyyy"
                        onChange={(e: Date) => {
                          handleDataChange(e, 'volta')
                          estaPronto()
                        }}
                        minDate={now}
                        className="m-auto w-full my-1 text-center"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap mb-3 position-relative">
                  <div className="w-full md:w-6/12 text-center">
                    <Autocomplete
                      id="busca-origem"
                      freeSolo
                      disableClearable
                      options={airports.map(
                        a => `(${a.IATA}) ${a.city}, ${a.country}`
                      )}
                      renderInput={params => (
                        <TextField
                          {...params}
                          InputProps={{ ...params.InputProps }}
                          type="text"
                          name="origem"
                          placeholder="Origem"
                          value={formData.origem}
                          className="m-auto w-full my-1"
                          onSelect={e => {
                            handleInputChange(e)
                            estaPronto()
                          }}
                        />
                      )}
                    />
                  </div>

                  <div className="w-full md:w-6/12 text-center">
                    <Autocomplete
                      id="busca-destino"
                      freeSolo
                      disableClearable
                      options={airports.map(
                        a => `${a.city} (${a.IATA}), ${a.country}`
                      )}
                      renderInput={params => (
                        <TextField
                          {...params}
                          InputProps={{ ...params.InputProps }}
                          type="text"
                          name="destino"
                          placeholder="Destino"
                          className="m-auto w-full my-1"
                          value={formData.destino}
                          onSelect={e => {
                            handleInputChange(e)
                            estaPronto()
                          }}
                        />
                      )}
                    />
                  </div>
                </div>

                <Collapsible title="Passageiros">
                  <div className="flex flex-wrap">
                    <div className="px-3 my-1 text-center w-full sm:w-4/12">
                      <div className="flex">
                        {btnDecrementarPessoa('adultos')}
                        <div className="px-1 w-6/12">
                          <input
                            name="adultos"
                            type="number"
                            className="text-center w-full"
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
                      <div className="flex">
                        <FormularioLabel
                          label="Adultos"
                          inputName="txtAdultos"
                        />
                      </div>
                    </div>

                    <div className="px-3 my-1 text-center w-full sm:w-4/12">
                      <div className="flex">
                        {btnDecrementarPessoa('criancas')}
                        <div className="px-1 w-6/12">
                          <input
                            name="criancas"
                            type="number"
                            className="text-center w-full"
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
                      <div className="flex">
                        <FormularioLabel
                          label="Crianças"
                          inputName="txtCriancas"
                        />
                      </div>
                    </div>

                    <div className="px-3 my-1 text-center w-full sm:w-4/12">
                      <div className="flex">
                        {btnDecrementarPessoa('bebes')}
                        <div className="px-1 w-6/12">
                          <input
                            name="bebes"
                            type="number"
                            className="text-center w-full"
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
                      <div className="flex">
                        <FormularioLabel label="Bebês" inputName="txtBebes" />
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <div className="flex my-2">
                  <div className="w-full">{btnBuscarPassagens}</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
