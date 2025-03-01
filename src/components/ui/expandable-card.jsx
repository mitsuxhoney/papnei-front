import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { Button } from '@/components/ui/button'

import { Progress as ProgressBar } from '@/components/ui/progress'

import { useExpandable } from '@/components/hooks/use-expandable'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { CardDescription, CardTitle } from './aceternity-card'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function ProjectStatusCard({
  title,
  titleBeforeExpand,
  titleAfterExpand,
  descriptionBeforeExpand,
  descriptionAfterExpand,
  progress,
  dueDate,
  contributors,
  tasks,
  githubStars,
  openIssues,
  open,
  close,
}) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable()
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0)
    }
  }, [isExpanded, animatedHeight])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Card className="relative w-full mx-auto cursor-pointer transition-all duration-300 hover:shadow-lg">
      <div
        className="absolute -top-8 -right-8 max-sm:-top-8 max-sm:-right-6 flex items-center gap-2 text-muted-foreground"
        style={{ opacity: 1 }}
      >
        <span className="text-sm font-medium">Give it a click!</span>
        <svg
          width="60"
          height="40"
          viewBox="0 0 202 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M79.3953 0.222873C68.6059 1.25504 56.3155 5.75905 46.5582 12.257C35.8158 19.3884 26.3869 29.3816 19.28 41.1812C17.0987 44.7938 12.9003 53.0746 11.1411 57.2033C6.87232 67.2904 3.58861 78.1047 1.31348 89.6931C0.281455 94.9008 0 97.2232 0 100.249C0.023455 104.824 0.797459 109.515 1.57148 109.515C1.94676 109.515 1.89985 110.008 2.01713 104.683C2.11095 99.6864 2.43932 97.0121 3.65898 91.6871C7.52906 74.6328 11.3053 63.5136 17.4036 51.3387C22.681 40.7824 28.2633 32.8769 35.7454 25.4172C47.0742 14.1102 60.6078 6.90851 75.4079 4.28117C78.3398 3.76509 85.3294 3.57742 88.7304 3.9293C100.388 5.14913 111.341 10.3334 116.313 17.0425C118.682 20.2563 120.606 25.253 121.004 29.2643C121.38 32.8065 120.723 37.5921 119.48 40.7355C118.893 42.2368 118.87 43.3159 119.456 44.0666C120.019 44.8172 120.911 45.2395 121.872 45.2395C123.256 45.2395 124.194 44.395 125.133 42.3072C126.071 40.2663 128.111 37.6859 130.879 35.082C136.25 30.0385 143.592 26.5432 152.27 24.9245C154.967 24.4085 162.074 24.2208 165.147 24.5961C170.049 25.1591 176.522 27.1765 180.463 29.3816C184.31 31.5398 189.165 35.8327 191.323 39.023C194.442 43.6443 195.615 48.4767 195.146 54.7167C194.278 66.0471 190.455 76.4626 182.855 88.051C178.633 94.5021 172.488 100.953 166.015 105.786C158.11 111.674 147.509 117.491 139.745 120.189C138.455 120.635 137.306 121.01 137.188 121.01C137.048 121.01 137.704 120.142 138.619 119.063C143.123 113.879 145.257 108.624 143.803 106.278C142.771 104.66 140.519 104.073 138.924 105.058C137.869 105.692 135.57 108.671 133.858 111.603C132.685 113.597 131.981 114.465 130.175 116.178C124.077 121.948 123.256 123.098 123.256 125.819C123.256 127.883 123.913 129.314 125.602 131.027C128.768 134.17 134.749 135.625 150.112 136.962C153.138 137.22 156.398 137.595 157.336 137.806C158.556 138.088 159.142 138.111 159.306 137.947C160.01 137.243 157.172 134.991 152.809 132.81C149.08 130.933 146.688 129.995 142.677 128.869C140.965 128.376 139.557 127.907 139.557 127.836C139.557 127.743 140.636 127.32 141.973 126.898C147.673 125.045 153.888 122.066 160.784 117.843C176.03 108.577 185.67 98.3258 193.363 83.242C196.764 76.5799 198.547 71.6536 199.907 65.0383C200.845 60.6282 201.103 58.0947 201.08 53.5672C201.08 48.9459 200.658 46.1544 199.485 43.0344C197.655 38.1785 194.184 33.393 189.915 29.8273C183.395 24.4085 176.522 21.4058 167.352 19.9983C164.209 19.5291 157.735 19.4587 154.569 19.881C144.366 21.2416 135.312 24.948 128.651 30.5311L126.774 32.1028L126.61 30.1792C126.024 23.3997 122.928 16.5968 118.331 12.0224C116.196 9.91118 112.42 7.28384 109.23 5.66521C100.645 1.34887 89.2698 -0.715462 79.3953 0.222873Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <CardHeader className="space-y-1">
        {/* <div className="flex justify-between items-center w-full">
          <div className="space-y-2 flex justify-between items-center w-full">
            <Badge
              variant="secondary"
              className={
                progress === 100
                  ? 'bg-green-100 text-green-600'
                  : 'bg-blue-100 text-blue-600'
              }
            >
              {progress === 100 ? 'Completed' : 'In Progress'}
            </Badge>

            <h3 className="text-lg font-semibold">{title}</h3>
            {isExpanded ? close : open}
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View on GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div> */}
        <div className="w-full">
          <div className="flex flex-col gap-2 items-start text-left w-full px-2">
            <CardTitle className="flex justify-between gap-4 w-full">
              <div className="text-md">{titleBeforeExpand}</div>
              <div className="text-sm tracking-wider">
                {isExpanded ? (
                  <div
                    onClick={() => {
                      toggleExpand()
                    }}
                    className="rounded-full p-1 border"
                  >
                    {close}
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      toggleExpand()
                    }}
                    className=""
                  >
                    {open}
                  </div>
                )}
              </div>
            </CardTitle>
            {isExpanded ? (
              <CardDescription className="font-medium">
                {descriptionAfterExpand}
              </CardDescription>
            ) : (
              <CardDescription className="font-medium">
                {descriptionBeforeExpand}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} className="h-2" />
          </div> */}

          <motion.div
            style={{ height: animatedHeight }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden w-full"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 "
                  >
                    {/* <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Due {dueDate}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          <span>{githubStars}</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="h-4 w-4 mr-1" />
                          <span>{openIssues} issues</span>
                        </div>
                      </div>
                    </div> */}
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col items-start text-left w-full"
                      >
                        <div className="flex flex-col gap-2 w-full px-2">
                          <div className="w-full">
                            <FormField
                              control={form.control}
                              className="w-full"
                              name="full_name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="shadcn"
                                      {...field}
                                      className="w-full"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-full">
                            <FormField
                              control={form.control}
                              className="w-full"
                              name="business_name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Business Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="shadcn"
                                      {...field}
                                      className="w-full"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-full">
                            <FormField
                              control={form.control}
                              className="w-full"
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="shadcn"
                                      {...field}
                                      className="w-full"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-full">
                            <FormField
                              control={form.control}
                              className="w-full"
                              name="business_name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Work Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="shadcn"
                                      {...field}
                                      className="w-full"
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className="w-full mt-4 px-2">
                          <Button type="submit" className="text-sm">
                            Get API Key
                          </Button>
                        </div>
                      </form>
                    </Form>

                    {/* <div className="space-y-2">
                      <h4 className="font-medium text-sm flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Contributors
                      </h4>
                      <div className="flex -space-x-2">
                        {contributors.map((contributor, index) => (
                          <TooltipProvider key={index}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Avatar className="border-2 border-white">
                                  <AvatarImage
                                    src={
                                      contributor.image ||
                                      `/placeholder.svg?height=32&width=32&text=${contributor.name[0]}`
                                    }
                                    alt={contributor.name}
                                  />
                                  <AvatarFallback>
                                    {contributor.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{contributor.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div> */}

                    {/* <div className="space-y-2">
                      <h4 className="font-medium text-sm">Recent Tasks</h4>
                      {tasks.map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-600">{task.title}</span>
                          {task.completed && (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                      ))}
                    </div> */}

                    {/* <div className="space-y-2">
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        View Discussion
                      </Button>
                    </div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </CardContent>

      {/* <CardFooter>
        <div className="flex items-center justify-between w-full text-sm text-gray-600">
          <span>Last updated: 2 hours ago</span>
          <span>{openIssues} open issues</span>
        </div>
      </CardFooter> */}
    </Card>
  )
}
