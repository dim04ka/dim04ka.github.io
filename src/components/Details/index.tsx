import { IValue } from '../../interface'
import MyImage from '../MyImage'
import './style.scss'

export const Details = ({ data }: { data: IValue | null }) => {
    const getValues = (prefix: string) => {
        if (!data) return []
        const result: string[] = []
        for (let i = 1; i <= 15; i++) {
            const key = `${prefix}${i}` as keyof IValue
            const value = data[key]
            if (value) {
                result.push(value)
            }
        }
        return [...new Set(result)]
    }

    if (!data) return null

    return (
        <div>
            <div>
                idDrink: <b>{data.idDrink}</b>
            </div>
            <div>
                strCategory: <b>{data.strCategory}</b>
            </div>
            <div>
                strDrink: <b>{data.strDrink}</b>
            </div>
            <div>
                strGlass: <b>{data.strGlass}</b>
            </div>
            <div>
                strInstructions: <b>{data.strInstructions}</b>
            </div>
            <h3>List of ingredients:</h3>
            <div className="list">
                <div className="item">
                    {getValues('strIngredient').map((element: string) => (
                        <div key={element}>{element}</div>
                    ))}
                </div>
                <div className="item">
                    {getValues('strMeasure').map((element: string) => (
                        <div key={element}>{element}</div>
                    ))}
                </div>
            </div>
            <MyImage data={data} />
        </div>
    )
}

export default Details
