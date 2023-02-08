import React from 'react'
import "./_CartWidget.scss"

const CartWidget = ({totalQuantity}) => {
    return(
            <>
                <div className="CartWidget">
                    <div className='CartWidget__Colmn1'>
                        <img className='Colmn1__IMG' alt='ShoppingCart' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2du2tUQRSHP+NbURQLLXyhNhoVEhD/AvGB/4CVIiopbO1jJSiRhAQtTEil4gNU0MJHUolICpuYKIKonc+oSQwkbBwZnIBIHrs7d++cmXs++MEWKc75nb2zc869cwOKoiiKoiiKoih/2Qh0Ax+AIacRwPynr8AtYJsalx2bgS/TmD2b7N9rETLiZoXmT+luVgEUnZ9VFmAS2BI6+NiZB4xWWQCrC6ETSIEHHgWwP8pLQycQO7s8r4JjoRNIgd3AI2CiigL0hQ4+JeqA1f/Icsbj6khRQ8DtPLfha4AxAYkbYfoGbM2rCN0CEjYCdSOvAuwRkKwRKLsLzI0+AQmbIhfgqICEjTBdz7MAi4HPApI2QmRHMQ3kzHkBiRsh6iQAm4CSgORNYNlt+QYCcV+AASawmgnIIQEGmID6CKwIPcJ+I8AIE0gnEEBR50ODwAIEYAd1vwQYYnLWAQRRtPlQD8JoEGCKybHpakQgRZkPdSGUIsyHxkI2XXNRhPlQM8JJeT70KXTTVfT50EkiIcX50KCUpquo86GDRERq86FeIiSV+dCk1KarKPOhLiIm9vnQmOSmqwjzobMkQF/ETddKEiDW+dApEiHG+dBgTE1XOVwRYKqpQLaRTIa17hl6E4k6SYxrAkw1Zeo5sIyE2C/AVFOGfrtlcgkJYU9LvhVgrplBP4AXQAewgwQ5V4YJ74HloQNNkZ1lnrA8HDrQVE9WPpV2mKFIHC/D/O/AutCBpvrtf1dGAZpCB5oqe8sw/5krlFIDmuYwf8K9i0IJdBvS7rmVGnJEQINlMpZ9gdW9WJq1RgGGmRppJIbl0z6O8lqAWaZGekgEnBZglKmRxoH5CKfOnR4xCWoihgJY1gOvBBhmirgETbHK8wWARpiGY/gRno59wFU3eh4XYKSpUHZudQfYHtpIRVEURakUu3NoA166N/KOus+t7tZlaKTH5/VI4iV3wGGmHUbJTUgXaXzZm99bwVavJ+ciSI/Pm8tV7LfbNb7s1tTZlp3ZlqP6HIogPT5v2jy6zosanz8DHgXoz6EA0uPzZrp/d1XJwKvo8Xkz7Hn/tejxJX+JDwiPz5tWjwRbND5/dlb5uppSTo9+SI8vEzqqSLBN48sO27Y/qcD8x8DCHAsgPb7Mkmyf43IvuW9+iOSkx5cZ9a7D7Xd78BH3uUXImio9PkVRFEVRFEVRSIs/BRnp/+0OUlUAAAAASUVORK5CYII="></img>
                    </div>
                    <div className='CartWidget__Colmn2'>
                        <h2 className='Colmn2__Text'>{totalQuantity}</h2>
                    </div>
                </div>
            </>
    )
}

export default CartWidget;