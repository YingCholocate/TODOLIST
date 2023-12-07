import NumBox from '@/components/NumBox'
import Input from '../Input'
import TextArea from '../TextArea'
import styles from './index.module.less'
import { TagsInput } from 'react-tag-input-component'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRef, useState } from 'react'
import { Itodo } from '@/components/TodoList/TodoList'
interface Iprops {
  update: SubmitHandler<Itodo>
  isShow: boolean
  setIsShow: (isShow: boolean) => void
}
export default function FormModal(props: Iprops) {
  const [selected, setSelected] = useState<string[]>([])
  const { update, isShow, setIsShow } = props
  const submitButtonRef = useRef(null)
  const { handleSubmit, register, reset } = useForm<Itodo>()
  const onCancel = () => {
    reset()
    setIsShow(!isShow)
  }
  const onSubmit = (data: Itodo) => {
    update?.({ ...data, tags: selected })
    onCancel()
    setSelected([])
  }
  const handleClick = () => {
    const submitElement = submitButtonRef.current as HTMLButtonElement | null
    if (submitElement) {
      submitElement.click()
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={isShow ? { display: 'block' } : { display: 'none' }}
        className={styles.wrapContainer}>
        <div className={styles.container}>
          <Input {...register('title', { required: true })} placeholder="Take dog out on walk" />
          <TextArea {...register('description', { required: true })} placeholder="He needs vaccine shot too" />
          <TagsInput value={selected} onChange={setSelected} name="fruits" placeHolder="Tag" />

          <div className="flex gap-4">
            {[1, 2, 3, 4].map((num) => (
              <NumBox num={num} key={num} />
            ))}
          </div>
        </div>
        <div className="flex pt-8 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="51" viewBox="0 0 100 51" fill="none">
            <g pointerEvents="bounding-box">
              <path
                d="M29.6196 21.1356L21.2843 29.7683M29.7683 29.6196L21.1356 21.2843M38.4009 37.9549C36.759 39.6554 34.7983 41.0158 32.6306 41.9585C30.4629 42.9012 28.1308 43.4078 25.7673 43.4492C23.4039 43.4906 21.0555 43.0661 18.8561 42.1999C16.6567 41.3337 14.6495 40.0428 12.949 38.4009C11.2485 36.759 9.88807 34.7982 8.94536 32.6306C8.00265 30.4629 7.49613 28.1308 7.45471 25.7673C7.41329 23.4039 7.83779 21.0554 8.70398 18.8561C9.57016 16.6567 10.8611 14.6495 12.503 12.949C15.819 9.5147 20.3634 7.53835 25.1366 7.4547C29.9097 7.37105 34.5206 9.18696 37.9549 12.503C41.3892 15.8189 43.3655 20.3634 43.4492 25.1365C43.5328 29.9097 41.7169 34.5206 38.4009 37.9549Z"
                stroke="#94A3B8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={onCancel}
              />
            </g>
            <g pointerEvents="bounding-box">
              <path
                d="M74.452 26.9517L78.952 31.4517L86.452 20.9517M98.452 25.4517C98.452 27.8155 97.9864 30.1561 97.0818 32.34C96.1772 34.5238 94.8513 36.5081 93.1799 38.1796C91.5084 39.851 89.5241 41.1769 87.3403 42.0815C85.1564 42.9861 82.8158 43.4517 80.452 43.4517C78.0882 43.4517 75.7475 42.9861 73.5637 42.0815C71.3798 41.1769 69.3955 39.851 67.724 38.1796C66.0526 36.5081 64.7267 34.5238 63.8221 32.34C62.9175 30.1561 62.452 27.8155 62.452 25.4517C62.452 20.6778 64.3484 16.0994 67.724 12.7237C71.0997 9.34808 75.6781 7.45166 80.452 7.45166C85.2259 7.45166 89.8042 9.34808 93.1799 12.7237C96.5555 16.0994 98.452 20.6778 98.452 25.4517Z"
                stroke="#94A3B8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={handleClick}
              />
            </g>
          </svg>
          <button type="submit" ref={submitButtonRef} style={{ display: 'none' }}>
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
