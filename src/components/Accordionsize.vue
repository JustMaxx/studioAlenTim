<template>
  <div class="size-accordion__row">
                                                    <div class="size-accordion__column">
                                                        <div class="size-accordion__title">
                                                            {{title1}}
                                                        </div>
                                                        <div class="size-accordion__value">
                                                            {{size1}} см
                                                        </div>
                                                    </div>
                                                    <div class="size-accordion__column">
                                                        <div class="size-accordion__title">
                                                            {{title2}}
                                                        </div>
                                                        <div class="size-accordion__value">
                                                           {{size2}} см
                                                        </div>
                                                    </div>
                                                </div>
</template>

<script>
export default {
name: 'Accordionsize',
props:{
    title1: String,
    size1: Number,
    title2: String,
    size2: Number
}
}
</script>

<style>

</style>