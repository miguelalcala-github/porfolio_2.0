<template>
    <div>
        <ErrorsDisplay v-if="errors.length" :errors="errors"/>
        <form @submit="handleSubmit" >
            <slot name="elements"></slot>
            <div>
                <button class="form__btn" type="submit">{{ submitButtonText }}</button>
                <button class="form__btn" @click="handleCancel">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['errors', 'submitButtonText', 'cancel', 'submit'],

    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.submit();
        },
        handleCancel(e) {
            e.preventDefault();
            this.cancel();
        }
    }
}
</script>