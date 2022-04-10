import { CheckIcon } from '@heroicons/react/outline'
import { getProducts, Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import payments, { loadCheckout } from '../lib/stripe'
import Table from './Table'

interface Props {
  products: Product[]
}

function Plans() {
  const [products, setProducts] = useState<Product[]>([])
  const { logout, user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(null)
  const [isBillingLoading, setBillingLoading] = useState(false)

  useEffect(() => {
    if (!user) return

    const getPlans = async () => {
      await getProducts(payments, {
        includePrices: true,
        activeOnly: true,
      })
        .then((res) => {
          setProducts(res)
          setSelectedPlan(res[2])
        })
        .catch((error) => console.log(error.message))
    }

    getPlans()
  }, [])

  console.log(products)

  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="https://rb.gy/ek4j9f"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-24 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          {products.length === 0 ? (
            'Loading...'
          ) : (
            <>
              <Table products={products} selectedPlan={selectedPlan} />
              <button
                disabled={!selectedPlan || isBillingLoading}
                className="mx-auto w-11/12 rounded bg-[#E50914] py-3.5 text-lg font-semibold shadow hover:bg-[#f6121d] md:w-96"
                onClick={subscribeToPlan}
              >
                Subscribe
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Plans
